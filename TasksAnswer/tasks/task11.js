import ButtonComponent from "../../components/Buttons.js";
import CreateTitle from "../../components/TitleComponent.js";
export default {
  title: "Task 11 - Interactive Clock",
  description: "",
  github:
    "https://github.com/Houda-Farrag/JavaScritpTasksMonitorShip/blob/main/tasks/task11.js",
  notes: "",
  render: (container) => {
    container.innerHTML = "";
    container.className =
      "p-4 bg-green-500 rounded-lg shadow-md border border-gray-200";
    const wrapper = document.createElement("div");
    wrapper.className =
      "max-w-5xl mx-auto border border-gray-300 p-6 bg-white rounded-lg shadow-lg flex flex-col gap-4 ";
    wrapper.style.direction = "rtl";
    wrapper.style.fontFamily = "Arial, sans-serif";

    const title = CreateTitle(
      "الساعة التفاعلية",
      "text-3xl font-bold mb-4 text-center border-b border-gray-300 p-6 bg-gray-200  ",
      "h1"
    );

    const ClockDisplay = document.createElement("div");
    ClockDisplay.id = "clockId";
    ClockDisplay.className =
      "text-3xl font-bold mb-4 text-center border-b border-gray-300 p-6 bg-gray-200 animate-[fade-in_0.5s_ease-in-out] ";
    ClockDisplay.innerHTML = `<span>${new Date().toLocaleTimeString()}</span>`;

    let IntervalTime = setInterval(() => {
      ClockDisplay.getElementsByTagName(
        "span"
      )[0].innerHTML = `${new Date().toLocaleTimeString()}`;
    }, 1000);

    const buttonStartClock = ButtonComponent({
      text: "start clock",
      className: "p-2 bg-green-300 text-gray-400 border rounded ",
      onClick: () => {
        clearInterval(IntervalTime);
        IntervalTime = setInterval(() => {
          ClockDisplay.getElementsByTagName(
            "span"
          )[0].innerHTML = `${new Date().toLocaleTimeString()}`;
        }, 1000);
      },
    });



    const buttonGotoUrl = ButtonComponent({
      text: "Go to Url",
      className: "p-2 bg-gold-300 text-gray-400 border rounded ",
      onClick: () => {
        const url = prompt("أدخل الرابط الذي تريد الذهاب إليه:");

        if (url && url.trim()) {
          if (!url.startsWith("http://") && !url.startsWith("https://")) {
            clearInterval(IntervalTime);
            window.location.href = "https://" + url.trim()

          } else {
            clearInterval(IntervalTime);
            window.location.href = url.trim();
          }
        }
      },
    });

    const buttonStopClock = ButtonComponent({
      text: "stopClock",
      className: "p-2 bg-gold-300 text-gray-400 border rounded ",
      onClick: () => {
        clearInterval(IntervalTime);
      },
    });

    const buttonContainer = document.createElement("div");
    buttonContainer.className = "flex justify-center gap-4";
    buttonContainer.appendChild(buttonStartClock);
    buttonContainer.appendChild(buttonStopClock);
    buttonContainer.appendChild(buttonGotoUrl);

    wrapper.appendChild(title);
    wrapper.appendChild(ClockDisplay);
    wrapper.appendChild(buttonContainer);

    container.appendChild(wrapper);
  },
  code: `{
  container.innerHTML = "";
    container.className =
      "p-4 bg-green-500 rounded-lg shadow-md border border-gray-200";
    const wrapper = document.createElement("div");
    wrapper.className =
      "max-w-5xl mx-auto border border-gray-300 p-6 bg-white rounded-lg shadow-lg flex flex-col gap-4 ";
    wrapper.style.direction = "rtl";
    wrapper.style.fontFamily = "Arial, sans-serif";

    const title = CreateTitle(
      "الساعة التفاعلية",
      "text-3xl font-bold mb-4 text-center border-b border-gray-300 p-6 bg-gray-200  ",
      "h1"
    );

    const ClockDisplay = document.createElement("div");
    ClockDisplay.id = "clockId";
    ClockDisplay.className =
      "text-3xl font-bold mb-4 text-center border-b border-gray-300 p-6 bg-gray-200 animate-[fade-in_0.5s_ease-in-out] ";
    ClockDisplay.innerHTML = \`<span>\${new Date().toLocaleTimeString()}</span>\`;

    let IntervalTime = setInterval(() => {
      ClockDisplay.getElementsByTagName(
        "span"
      )[0].innerHTML = \`\${new Date().toLocaleTimeString()}\`;
    }, 1000);

    const buttonStartClock = ButtonComponent({
      text: "start clock",
      className: "p-2 bg-green-300 text-gray-400 border rounded ",
      onClick: () => {
        clearInterval(IntervalTime);
        IntervalTime = setInterval(() => {
          ClockDisplay.getElementsByTagName(
            "span"
          )[0].innerHTML = \`\${new Date().toLocaleTimeString()}\`;
        }, 1000);
      },
    });

    const buttonGotoUrl = ButtonComponent({
      text: "Go to Url",
      className: "p-2 bg-gold-300 text-gray-400 border rounded ",
      onClick: () => {
        console.log("gotourl");
      },
    });

    const buttonStopClock = ButtonComponent({
      text: "stopClock",
      className: "p-2 bg-gold-300 text-gray-400 border rounded ",
      onClick: () => {
        clearInterval(IntervalTime);
      },
    });

    const buttonContainer = document.createElement("div");
    buttonContainer.className = "flex justify-center gap-4";
    buttonContainer.appendChild(buttonStartClock);
    buttonContainer.appendChild(buttonStopClock);
    buttonContainer.appendChild(buttonGotoUrl);

    wrapper.appendChild(title);
    wrapper.appendChild(ClockDisplay);
    wrapper.appendChild(buttonContainer);

    container.appendChild(wrapper);
  }`,
  directionDescription: "rtl", // This can be used to set the text direction for Arabic
};
