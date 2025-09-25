document.addEventListener("DOMContentLoaded", function () {
  // DOM Elements
  const addIdeaForm = document.getElementById("addIdeaForm");
  const ideasGrid = document.getElementById("ideasGrid");
  const emptyState = document.getElementById("emptyState");
  const searchInput = document.getElementById("searchInput");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const exportBtn = document.getElementById("exportBtn");
  const importBtn = document.getElementById("importBtn");
  const importFile = document.getElementById("importFile");
  const clearBtn = document.getElementById("clearBtn");

  // Current filter
  let currentFilter = "all";
  let currentSearch = "";

  // Load ideas from localStorage (fallback)
  let ideas = JSON.parse(localStorage.getItem("devIdeas")) || [];

  // Initialize the app
  renderIdeas();

  // Event Listeners
  addIdeaForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("ideaTitle").value;
    const category = document.getElementById("ideaCategory").value;
    const description = document.getElementById("ideaDescription").value;
    const status = document.getElementById("ideaStatus").value;

    const newIdea = {
      id: Date.now(),
      title,
      category,
      description,
      status,
      date: new Date().toISOString(),
    };

    ideas.push(newIdea);
    saveIdeas();
    renderIdeas();

    // Reset form
    addIdeaForm.reset();
  });

  searchInput.addEventListener("input", function () {
    currentSearch = this.value.toLowerCase();
    renderIdeas();
  });

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Update active button
      filterBtns.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");

      // Update filter
      currentFilter = this.dataset.filter;
      renderIdeas();
    });
  });

  exportBtn.addEventListener("click", function () {
    exportToJsonFile();
  });

  importBtn.addEventListener("click", function () {
    importFile.click();
  });

  importFile.addEventListener("change", function (e) {
    const file = e.target.files[0];
    if (file) {
      importFromJsonFile(file);
    }
  });

  clearBtn.addEventListener("click", function () {
    if (
      confirm(
        "Are you sure you want to clear all ideas? This cannot be undone."
      )
    ) {
      ideas = [];
      saveIdeas();
      renderIdeas();
    }
  });

  // Functions
  function saveIdeas() {
    // Save to localStorage as fallback
    localStorage.setItem("devIdeas", JSON.stringify(ideas));
  }

  function renderIdeas() {
    // Filter ideas based on current filter and search
    let filteredIdeas = ideas.filter((idea) => {
      const matchesFilter =
        currentFilter === "all" || idea.status === currentFilter;
      const matchesSearch =
        idea.title.toLowerCase().includes(currentSearch) ||
        idea.description.toLowerCase().includes(currentSearch) ||
        idea.category.toLowerCase().includes(currentSearch);
      return matchesFilter && matchesSearch;
    });

    // Clear the grid
    ideasGrid.innerHTML = "";

    // Show empty state if no ideas
    if (filteredIdeas.length === 0) {
      ideasGrid.appendChild(emptyState);
      emptyState.style.display = "block";
      return;
    }

    emptyState.style.display = "none";

    // Render idea cards
    filteredIdeas.forEach((idea) => {
      const ideaCard = document.createElement("div");
      ideaCard.className = "idea-card";
      ideaCard.innerHTML = `
                        <div class="card-header">
                            <h3 class="card-title">${idea.title}</h3>
                            <span class="card-category">${idea.category}</span>
                        </div>
                        <div class="card-body">
                            <p class="card-description">${idea.description}</p>
                        </div>
                        <div class="card-footer">
                            <span class="status-badge status-${idea.status
                              .toLowerCase()
                              .replace(" ", "-")}">${idea.status}</span>
                            <div class="card-actions">
                                <button class="action-btn edit-btn" data-id="${
                                  idea.id
                                }">✏️</button>
                                <button class="action-btn delete-btn" data-id="${
                                  idea.id
                                }">🗑️</button>
                            </div>
                        </div>
                    `;

      ideasGrid.appendChild(ideaCard);
    });

    // Add event listeners to action buttons
    document.querySelectorAll(".delete-btn").forEach((btn) => {
      btn.addEventListener("click", function () {
        const id = parseInt(this.dataset.id);
        deleteIdea(id);
      });
    });

    document.querySelectorAll(".edit-btn").forEach((btn) => {
      btn.addEventListener("click", function () {
        const id = parseInt(this.dataset.id);
        editIdea(id);
      });
    });
  }

  function deleteIdea(id) {
    if (confirm("Are you sure you want to delete this idea?")) {
      ideas = ideas.filter((idea) => idea.id !== id);
      saveIdeas();
      renderIdeas();
    }
  }

  function editIdea(id) {
    // Find the idea to edit
    const idea = ideas.find((idea) => idea.id === id);
    if (!idea) return;

    // Fill the form with idea data
    document.getElementById("ideaTitle").value = idea.title;
    document.getElementById("ideaCategory").value = idea.category;
    document.getElementById("ideaDescription").value = idea.description;
    document.getElementById("ideaStatus").value = idea.status;

    // Remove the idea from the list (will be re-added when form is submitted)
    ideas = ideas.filter((i) => i.id !== id);
    saveIdeas();
    renderIdeas();

    // Scroll to form
    document.querySelector(".sidebar").scrollIntoView({ behavior: "smooth" });
  }

  function exportToJsonFile() {
    if (ideas.length === 0) {
      alert("No ideas to export!");
      return;
    }

    const dataStr = JSON.stringify(ideas, null, 2);
    const dataUri =
      "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);

    const exportFileDefaultName = "dev-ideas.json";

    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", dataUri);
    linkElement.setAttribute("download", exportFileDefaultName);
    linkElement.click();
  }

  function importFromJsonFile(file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      try {
        const importedIdeas = JSON.parse(e.target.result);

        if (!Array.isArray(importedIdeas)) {
          throw new Error("Invalid JSON format: Expected an array of ideas");
        }

        // Validate each idea has required fields
        const validIdeas = importedIdeas.filter(
          (idea) =>
            idea.title && idea.description && idea.category && idea.status
        );

        if (validIdeas.length === 0) {
          throw new Error("No valid ideas found in the file");
        }

        if (confirm(`Import ${validIdeas.length} ideas from the file?`)) {
          // Merge with existing ideas, avoiding duplicates by ID
          const existingIds = ideas.map((idea) => idea.id);
          const newIdeas = validIdeas.filter(
            (idea) => !existingIds.includes(idea.id)
          );

          ideas = [...ideas, ...newIdeas];
          saveIdeas();
          renderIdeas();
          alert(`Successfully imported ${newIdeas.length} new ideas!`);
        }
      } catch (error) {
        alert("Error importing ideas: " + error.message);
      }
    };

    reader.readAsText(file);
  }
});
