<script>
        function geeks(msg, gfg) {
            var confirmBox = $("#container");

            /* Trace message to display /
            confirmBox.find(".message").text(msg);

            / Calling function */
            confirmBox.find(".yes").unbind().click(function()
            {
            confirmBox.hide();
            });
            confirmBox.find(".yes").click(gfg);
            confirmBox.show();

            confirmBox.find(".no").unbind().click(function()
            {
            confirmBox.hide();
            });
            confirmBox.find(".no").click(gfg);
            confirmBox.show();
        }
    </script>
<style>

        /* Body alignment /
        body {
            text-align: center;
        }

        / Color for h1 tag /
        h1 {
            color: green;
        }

        / Designing dialog box /
        #container {
            display: none;
            background-image: linear-gradient(to right, #66a80f, #c0eb75);
            background-size:cover;
            color: white;
            position: absolute;
            width: 350px;
            border-radius: 5px;
            left: 50%;
            margin-left: -160px;
            padding: 16px 8px 8px;
            box-sizing: border-box;
        }

        / Designing dialog box's okay button */
        #container .yes {
            background-color: #5c940d;
            display: inline-block;
            border-radius: 5px;
            border: 2px solid gray;
            padding: 5px;
            margin-right: 10px;
            text-align: center;
            width: 60px;
            float: right;
        }
#container .no {
            background-color: #22b8cf;
            display: inline-block;
            border-radius: 5px;
            border: 2px solid gray;
            padding: 5px;
            margin-right: 10px;
            text-align: center;
            width: 95px;
            float: right;
        }

        #container .yes:hover {
            background-color: #82c91e;
        }

        #container .no:hover {
            background-color: #99e9f2;
        }

        /* Dialog box message decorating */
        #container .message {
            text-align: left;
            padding: 10px 30px;
        }
    </style>
</head>
<body>
    <h1>GeeksforGeeks</h1>
    <b>Designing the alert box</b>
    <br><br>
    <div id="container">
        <div class="message">
            Thanks for Subscription<br>A Computer
            Science Portal for Geeks</div>
        <button class="yes">okay</button>
        <button class="no">Unsubscribe</button>
    </div>
    <input type="button" value="Subscribe" onclick="geeks();" />