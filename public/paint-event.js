function paintEvent(svgContainer, applicableCount) {
	    var fillValue="none"
	    //var fillValue="yellow"
	    var radius = applicableCount
	    // TODO understand why it is this.object not this
/*	    var circleSvg = d3.select(this.object).select("svg")[0]
	    if (circleSvg[0] == null) {
		d3.select(this.object).append("svg")
		//.attr("width",  map.size.width)
		    .attr("width", 34)
 	    	//.attr("height", map.size.height)
		    .attr("height", 34)*/
            if (null == svgContainer.select('#primaryCircle')[0][0]) {
		svgContainer
		    .append("circle")
		    .attr("id","primaryCircle")
		    .attr("cx", 17)
		    .attr("cy", 17)
//		    .attr("r", radius)
		    .attr("stroke","yellow")
		    .attr("stroke-width","1")
		    .style("fill", fillValue);
	    }
	    var primaryCircleRadiusLimit = 15;
            if (radius > primaryCircleRadiusLimit) {
		radius = radius - primaryCircleRadiusLimit;
//		d3.select(this.object).select("svg").
		svgContainer.select("#primaryCircle")
		    .attr("r",primaryCircleRadiusLimit);
		//add middle circle if not extant
		if (null == svgContainer.select('#middleCircle')[0][0]) {
		    svgContainer.append("circle")
			.attr("id","middleCircle")
			.attr("cx", 17)
			.attr("cy", 17)
			.attr("stroke","yellow")
			.attr("stroke-width","1")
			.attr("fill","none");
		}
		var middleCircleRadiusLimit = 10;
		if (radius > middleCircleRadiusLimit) {
		    radius = radius - middleCircleRadiusLimit;
		    svgContainer.select("#middleCircle")
			.attr("r", middleCircleRadiusLimit);
		    //add inner circle
		    if (null == svgContainer.select('#innerCircle')[0][0]) {
			svgContainer.append("circle")
			    .attr("id","innerCircle")
			    .attr("cx", 17)
			    .attr("cy", 17)
			    .attr("stroke","yellow")
			    .attr("stroke-width","1")
			    .attr("fill","none");
		    }
		    var innerCircleRadiusLimit = 5;
		    if (radius > innerCircleRadiusLimit) {
			radius = radius - innerCircleRadiusLimit;
			svgContainer.select("#innerCircle")
			    .attr("stroke","yellow")
			    .attr("r", innerCircleRadiusLimit);
			svgContainer.append("circle")
			    .attr("id","innerMostCircle")
			    .attr("cx", 17)
			    .attr("cy", 17)
			    .attr("stroke","yellow")
			    .attr("stroke-width","1")
			    .attr("fill","yellow");
			if (radius <= 5) {
			    svgContainer.select("#innerMostCircle")
				.attr("r",radius);
			} else {
			    svgContainer.select("#innerCircle")
				.attr("fill","yellow");
			    radius = radius - 5;
			    if (radius <= 5) {
				svgContainer.select("#innerMostCircle")
				    .attr("stroke","red")
				    .attr("fill","red")
				    .attr("r",radius);
			    } else {
				svgContainer.select("#innerMostCircle")
				    .attr("stroke","red")				    
				    .attr("fill","red")
				    .attr("r", 5);
				radius = radius - 5;
				if (radius <= 5){
				    svgContainer.select("#middleCircle")
			    		.attr("stroke","red");
				} 
				radius = radius - 5;
				if (radius > 0){
				    svgContainer.select("#middleCircle")
			    		.attr("stroke","red");
				    svgContainer.select("#primaryCircle")
			    		.attr("stroke","red");
				}
			    }
			}
		    } else {
			svgContainer.select("#innerCircle")
			    .attr("fill","none")
			    .attr("stroke","yellow")
			    .attr("r",radius);
		    }		    		  
		} else { // radius does not exceed middle circle limit
		    svgContainer.select("#middleCircle")
			.attr("stroke","yellow")
			.attr("r",radius);
		    svgContainer.select("#innerCircle").remove();
		}
	    } else { // radius does not exceed primary circle limit
		svgContainer.select("#middleCircle").remove();
		svgContainer.select("#innerCircle").remove();
		svgContainer.select("#primaryCircle")
		    .attr("stroke","yellow")
		    .attr("r",radius);
	    } 
}