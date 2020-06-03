	iterateCircles();
	  
	function iterateCircles(mode = "random"){
	        /* Get List of Circles by ID and grouped by class into an array */
			var circle_list = document.getElementById("circle_set");
	        var circle_arr  = circle_list.getElementsByTagName('li');
	        if(mode.toLowerCase() == "random") {
            	/*Creates a Numbered array and then shuffles that instead of index.*/
            	var list = new Array();
            	for (i = 0; i < circle_arr.length; i++) {
            	    list.push(Math.abs(i));
            	}
            	list.sort(() => Math.random() - 0.5);
    	  
                /* Loop Through Array and Check Class status if active */
                for (i = 0; i < circle_arr.length; ++i) {
                    	if (!circle_arr[list[i]].className.includes("active")) {
                    	    circle_arr[list[i]].classList.add("active");
                    	    console.log(list[i]);
                    	    setTimeout(iterateCircles, 2000);
                    	    return true;
                    	}
                }
	        } else if (mode.toLowerCase() == "reset") {
	            /* Reset - Remove Active Class & Call New Timer */
	            for (i = 0; i < circle_arr.length; ++i) {
                    circle_arr[i].classList.remove("active");
                }
                setTimeout(iterateCircles, 2000);
                return true;
	        } else {
	            /* Default / Finish  - Add Active Class To All */
	            for (i = 0; i < circle_arr.length; ++i) {
                    circle_arr[i].classList.add("active");
                }
                return true;
	        }
	}
	