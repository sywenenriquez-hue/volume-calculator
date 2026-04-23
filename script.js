<!DOCTYPE html>
<html>
<head>
    <title>Irregular Solid Volume Calculator</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Arial', sans-serif;
            padding: 30px;
            background-color: #fff9fb; /* Very light pink background */
            line-height: 1.6;
        }

        .container {
            max-width: 650px;
            margin: 0 auto;
            background: #ffffff;
            padding: 35px;
            border-radius: 12px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
            border: 1px solid #ffe6ef; /* Soft pink border */
        }

        h1 {
            color: #442233; /* Deep soft pink text */
            font-size: 26px;
            text-align: center;
            margin-bottom: 12px;
            font-weight: 600;
        }

        .info-text {
            margin: 10px 0 25px;
            color: #885566;
            font-style: italic;
            font-size: 14px;
            text-align: center;
            background-color: #fff0f6;
            padding: 12px;
            border-radius: 8px;
        }

        h2 {
            font-size: 20px;
            color: #552b3c;
            margin: 30px 0 20px;
            padding-bottom: 8px;
            border-bottom: 2px solid #ffd6e7; /* Light pink divider */
            font-weight: 600;
        }

        h3 {
            font-size: 17px;
            color: #663347;
            margin: 20px 0 12px;
            font-weight: 500;
        }

        label {
            display: inline-block;
            width: 90px;
            margin: 8px 0;
            font-weight: 500;
            color: #552b3c;
            font-size: 15px;
        }

        input {
            padding: 8px 12px;
            width: 200px;
            border: 1px solid #ffcce0;
            border-radius: 6px;
            background-color: #fffafc;
            color: #442233;
            font-size: 15px;
            transition: border-color 0.2s ease;
        }

        input:focus {
            outline: none;
            border-color: #ff99c2;
            box-shadow: 0 0 0 2px rgba(255, 153, 194, 0.15);
        }

        button {
            margin-top: 25px;
            padding: 10px 24px;
            background-color: #ffb3d1; /* Soft pink button */
            color: #331a26;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-size: 16px;
            font-weight: 500;
            transition: background-color 0.2s ease;
        }

        button:hover {
            background-color: #ff99c2; /* Slightly darker pink on hover */
        }

        #resultArea {
            margin-top: 30px;
            padding: 20px;
            background-color: #fff0f6;
            border-left: 4px solid #ff80bf;
            border-radius: 6px;
            display: none;
        }

        #resultArea h3 {
            margin-top: 0;
            color: #552b3c;
        }

        #resultArea p {
            margin: 8px 0;
            color: #442233;
            font-size: 15px;
        }

        hr {
            border: none;
            border-top: 1px solid #ffd6e7;
            margin: 15px 0;
        }

        #totalVolume {
            font-weight: bold;
            font-size: 18px !important;
            color: #331a26 !important;
        }
    </style>
</head>
<body>

    <div class="container">
        <h1>Irregular Solid Volume Calculator</h1>
        
        <p class="info-text"><strong>Solid Name:</strong> Tapered Dome Prism<br>
        <strong>Description:</strong> A unique irregular solid composed of three connected parts: a rectangular prism as the base, a cylinder in the middle section, and a hemisphere forming the rounded dome at the top. The shape gradually transitions from a square base to a circular dome.</p>

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
            <hr>
            <p id="totalVolume">Total Volume of Tapered Dome Prism: </p>
        </div>
    </div>

    <!-- Link to your separate JavaScript file -->
    <script src="script.js"></script>

</body>
</html>
