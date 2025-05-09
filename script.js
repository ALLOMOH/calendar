
document.addEventListener("DOMContentLoaded", function () {
    const monthYear = document.getElementById("month-year");
    const daysContainer = document.getElementById("days");
    const months = [
      "january",
      "February",
      "Marc",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    
    let weeksdays = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
    let currentDate = new Date();
    let today = new Date();
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    const weeksContainer = document.getElementById("week");
    weeksdays.forEach((ele) => {
      let dayWeek = document.createElement("div");
      dayWeek.innerText = ele;
      weeksContainer.appendChild(dayWeek);
    });
    function renderCalendar(date) {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDayIndex = new Date(year, month, 1).getDay();
        const lastDay = new Date(year, month + 1, 0).getDate();
        const prevLastDay = new Date(year, month, 0).getDate();
      
        monthYear.textContent = `${months[month]} ${year}`;
        daysContainer.innerHTML = ``;
      
        // Jours du mois précédent
        const start = firstDayIndex === 0 ? 6 : firstDayIndex - 1;
        for (let i = start; i > 0; i--) {
          const dayDiv = document.createElement("div");
          dayDiv.textContent = prevLastDay - i + 1;
          dayDiv.classList.add("fade");
          daysContainer.appendChild(dayDiv);
        }
      
        // Jours du mois actuel
        for (let i = 1; i <= lastDay; i++) {
          const dayDiv = document.createElement("div");
          dayDiv.textContent = i;
          if (
            i === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
          ) {
            dayDiv.classList.add("today");
          }
          daysContainer.appendChild(dayDiv);
        }
      
        // Jours du mois suivant
        const totalBoxes = daysContainer.children.length;
        const nextDays = (7 - (totalBoxes % 7)) % 7;
        for (let i = 1; i <= nextDays; i++) {
          const dayDiv = document.createElement("div");
          dayDiv.textContent = i;
          dayDiv.classList.add("fade");
          daysContainer.appendChild(dayDiv);
        }
      }
      
    prevButton.addEventListener("click", function () {
      currentDate.setMonth(currentDate.getMonth() - 1);
      renderCalendar(currentDate);
    });
    nextButton.addEventListener("click", function () {
      currentDate.setMonth(currentDate.getMonth() + 1);
      renderCalendar(currentDate);
    });
  
    renderCalendar(currentDate);
  });
  