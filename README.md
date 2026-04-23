# volume-calculator
Volume Calculator for Tapered Dome Prism - Irregular Solid
<!DOCTYPE html>
<html>
<head>
    <title>Irregular Solid Volume Calculator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 25px;
            background-color: #f9f9f9;
        }
        h1 {
            color: #222;
            font-size: 24px;
            margin-bottom: 15px;
        }
        h2 {
            font-size: 18px;
            color: #333;
            margin: 25px 0 10px;
            padding-bottom: 5px;
            border-bottom: 1px solid #ddd;
        }
        label {
            display: inline-block;
            width: 80px;
            margin: 8px 0;
            font-weight: 500;
        }
        input {
            padding: 6px;
            width: 180px;
            border: 1px solid #ccc;
            border-radius: 3px;
        }
        button {
            margin-top: 20px;
            padding: 8px 20px;
            background-color: #2c3e50;
            color: white;
            border: none;
            border-radius: 3px;
            cursor: pointer;
            font-size: 15px;
        }
        button:hover {
            background-color: #34495e;
        }
        #resultArea {
            margin-top: 25px;
            padding: 15px;
            background-color: #eef2f5;
            border-left: 4px solid #2980b9;
            display: none;
        }
        .info-text {
            margin: 10px 0;
            color: #555;
            font-style: italic;
        }
    </style>
</head>
<body>

    <h1>Irregular Solid Volume Calculator</h1>
    <p class="info-text"><strong>Solid Name:</strong> Tapered Dome Prism</p>
    <p class="info-text"><strong>Description:</strong> A unique irregular solid composed of three connected parts: a rectangular prism as the base, a cylinder in the middle section, and a hemisphere forming the rounded dome at the top. The shape gradually transitions from a square base to a circular dome.</p>

    <h2>Tapered Dome Prism Calculator</h2>

    <h3>Rectangular Prism</h3>
    <label>Length:</label>
    <input type="number" id="prismLength" placeholder="Enter length" step="0.01"><br>

    <label>Width:</label>
    <input type="number" id="prismWidth" placeholder="Enter width" step="0.01"><br>

    <label>Height:</label>
    <input type="number" id="prismHeight" placeholder="Enter height" step="0.01"><br>


    <h3>Cylinder</h3>
    <label>Radius:</label>
    <input type="number" id="cylinderRadius" placeholder="Enter radius" step="0.01"><br>

    <label>Height:</label>
    <input type="number" id="cylinderHeight" placeholder="Enter height" step="0.01"><br>


    <h3>Hemisphere</h3>
    <label>Radius:</label>
    <input type="number" id="hemisphereRadius" placeholder="Enter radius" step="0.01"><br>


    <button onclick="calculateTotalVolume()">Calculate Total Volume</button>

    <div id="resultArea">
        <h3>Calculation Results:</h3>
        <p id="prismVolume">Volume of Rectangular Prism: </p>
        <p id="cylinderVolume">Volume of Cylinder: </p>
        <p id="hemisphereVolume">Volume of Hemisphere: </p>
        <hr style="margin: 10px 0;">
        <p style="font-weight: bold; font-size: 17px; color: #2c3e50;" id="totalVolume">Total Volume of Tapered Dome Prism: </p>
    </div>

    <script>
        // Function to calculate total volume of the combined solid
        function calculateTotalVolume() {
            // Get input values
            let l = parseFloat(document.getElementById("prismLength").value);
            let w = parseFloat(document.getElementById("prismWidth").value);
            let hP = parseFloat(document.getElementById("prismHeight").value);

            let rC = parseFloat(document.getElementById("cylinderRadius").value);
            let hC = parseFloat(document.getElementById("cylinderHeight").value);

            let rH = parseFloat(document.getElementById("hemisphereRadius").value);

            // Check if all values are entered
            if (isNaN(l) || isNaN(w) || isNaN(hP) || isNaN(rC) || isNaN(hC) || isNaN(rH)) {
                alert("Please fill in all fields with valid numbers!");
                return;
            }

            // Calculate volume for each part
            let volumePrism = l * w * hP;
            let volumeCylinder = Math.PI * Math.pow(rC, 2) * hC;
            let volumeHemisphere = (2/3) * Math.PI * Math.pow(rH, 3);

            // Sum all volumes
            let total = volumePrism + volumeCylinder + volumeHemisphere;

            // Display results
            document.getElementById("prismVolume").innerHTML = `Volume of Rectangular Prism: ${volumePrism.toFixed(4)} cubic units`;
            document.getElementById("cylinderVolume").innerHTML = `Volume of Cylinder: ${volumeCylinder.toFixed(4)} cubic units`;
            document.getElementById("hemisphereVolume").innerHTML = `Volume of Hemisphere: ${volumeHemisphere.toFixed(4)} cubic units`;
            document.getElementById("totalVolume").innerHTML = `Total Volume of Tapered Dome Prism: ${total.toFixed(4)} cubic units`;

            // Show the result section
            document.getElementById("resultArea").style.display = "block";
        }
    </script>

</body>
</html>
