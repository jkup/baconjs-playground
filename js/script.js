var clicks = $("h1").asEventStream("click")

clicks.onValue(function() { alert("you clicked the h1 element") });
