// Example JavaScript functions for timetable management
let timetableData = [
    { time: "08:00 AM", monday: "", tuesday: "", wednesday: "", thursday: "", friday: "", saturday: "", sunday: "" },
    { time: "09:00 AM", monday: "", tuesday: "", wednesday: "", thursday: "", friday: "", saturday: "", sunday: "" },
    { time: "10:00 AM", monday: "", tuesday: "", wednesday: "", thursday: "", friday: "", saturday: "", sunday: "" },
    { time: "11:00 AM", monday: "", tuesday: "", wednesday: "", thursday: "", friday: "", saturday: "", sunday: "" },
    { time: "12:00 PM", monday: "", tuesday: "", wednesday: "", thursday: "", friday: "", saturday: "", sunday: "" },
    { time: "01:00 PM", monday: "", tuesday: "", wednesday: "", thursday: "", friday: "", saturday: "", sunday: "" },
    { time: "02:00 PM", monday: "", tuesday: "", wednesday: "", thursday: "", friday: "", saturday: "", sunday: "" },
    { time: "03:00 PM", monday: "", tuesday: "", wednesday: "", thursday: "", friday: "", saturday: "", sunday: "" }
];

function populateTimetable() {
    const timetableContainer = document.getElementById('timetable');

    // Clear any existing content
    timetableContainer.innerHTML = '';

    // Create header row for days of the week
    const headerRow = document.createElement('div');
    headerRow.classList.add('row', 'timetable-row', 'header-row');

    const timeHeaderCell = document.createElement('div');
    timeHeaderCell.classList.add('cell', 'time-column');
    timeHeaderCell.textContent = 'Time';
    headerRow.appendChild(timeHeaderCell);

    ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].forEach(day => {
        const dayHeaderCell = document.createElement('div');
        dayHeaderCell.classList.add('cell', 'day');
        dayHeaderCell.textContent = day;
        headerRow.appendChild(dayHeaderCell);
    });

    timetableContainer.appendChild(headerRow);

    // Populate timetable rows
    timetableData.forEach(entry => {
        // Create row for time
        const row = document.createElement('div');
        row.classList.add('row', 'timetable-row');

        // Create cell for time
        const timeCell = document.createElement('div');
        timeCell.classList.add('cell', 'time-column');
        timeCell.textContent = entry.time;
        row.appendChild(timeCell);

        // Create cells for each day
        ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].forEach(day => {
            const dayCell = document.createElement('div');
            dayCell.classList.add('cell', 'day');
            dayCell.textContent = entry[day];
            // Add event listener to allow user to input data
            dayCell.addEventListener('click', () => {
                const newData = prompt(`Enter data for ${day} at ${entry.time}:`, entry[day], 'i.e Traing,Match,Tactical Workshop.');
                if (newData !== null) {
                    dayCell.textContent = newData;
                    entry[day] = newData;
                    saveTimetableToLocalStorage(); // Save data when cell is updated
                }
            });

            row.appendChild(dayCell);
        });

        timetableContainer.appendChild(row);
    });
}

function saveTimetableToLocalStorage() {
    localStorage.setItem('timetableData', JSON.stringify(timetableData));
}

function loadTimetableFromLocalStorage() {
    const storedData = localStorage.getItem('timetableData');
    if (storedData) {
        timetableData = JSON.parse(storedData);
    } else {
        saveTimetableToLocalStorage();
    }
}

function saveTimetable() {
    saveTimetableToLocalStorage();
    alert('Timetable saved successfully!');
}

function updateTimetable() {
    loadTimetableFromLocalStorage();
    populateTimetable(); // Repopulate timetable with updated data
    alert('Timetable updated from localStorage!');
}

// Event listener for Save button
const saveButton = document.getElementById('saveButton');
saveButton.addEventListener('click', saveTimetable);

// Event listener for Update button
const updateButton = document.getElementById('updateButton');
updateButton.addEventListener('click', updateTimetable);

// Call function to load timetable from localStorage and populate timetable when the page loads
document.addEventListener('DOMContentLoaded', () => {
    loadTimetableFromLocalStorage();
    populateTimetable(); // Populate timetable with loaded data
});