$("#datepicker").datepicker({
    uiLibrary: "bootstrap5"
});

// Function to update statistics based on button clicks
function updateStat(statId, value) {
    const statInput = document.getElementById(statId);
    let currentValue = parseInt(statInput.value);
    // Ensure the value doesn't go below 0
    currentValue = Math.max(0, currentValue + value);
    statInput.value = currentValue;
}

function calculateStats() {
    // Get input values
    const ace = parseInt(document.getElementById("ace").value);
    const serveIn = parseInt(document.getElementById("serveIn").value);
    const drop = parseInt(document.getElementById("drop").value);
    const serveOut = parseInt(document.getElementById("serveOut").value);
    const serveShort = parseInt(document.getElementById("serveShort").value);
    // Calculate T+ and T-
    const goodServes = ace + serveIn + drop;
    const failedServes = serveOut + serveShort;
    // Calculate total serves and serve percentage
    const totalServes = goodServes + failedServes;
    const servePercentage =
        totalServes > 0 ? ((goodServes / totalServes) * 100).toFixed(2) : 0;
    // Update the UI with calculated results
    document.getElementById("goodServes").textContent = goodServes;
    document.getElementById("failedServes").textContent = failedServes;
    document.getElementById("totalServes").textContent = totalServes;
    document.getElementById("servePercentage").textContent = servePercentage;
    // Get values from inputs
    var gameName = document.getElementById("gameName").value;
    var gameNumber = document.getElementById("gameNumber").value;
    var datepicker = document.getElementById("datepicker").value;

    // Set the values in the results section
    document.getElementById("gameNameResult").textContent = gameName;
    document.getElementById("gameNumberResult").textContent = gameNumber;
    document.getElementById("datepickerResult").textContent = datepicker;

    // Add the rest of your calculation logic here
    // ...
}
