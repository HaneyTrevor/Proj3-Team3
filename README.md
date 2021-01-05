# Proj3-Team3

###Specific Project Requirements

*Python Flask - powered API, HTML/CSS, Javascript, and at least one database( SQL, MongoDB, SQLite, etc)
*One of four tracks:
	A custom “creative” d3.js project (i.e, a nonstandard graph or chart)
	A combination of web scraping and leaflet or plotly
	A dashboard page with multiple charts that update from the same data
	A “thick” server that performs multiple manipulations on data in a database prior to visualization
*Your project should include at least one JS library that we did not cover
*Your project must be powered by a data set with at least 100 records
*Your project must include some level of user driven interaction (menus, dropdowns, text boxes)
*Your final visualization should ideally include at least 3 views

	Leading Question: 
	Which state has the highest return on investment (ROI) with regards to tuition costs and average income level?
	
	Rationale:
	College Costs have increased, on average, 8% every year; doubling every 9 years. About 34% of people aged between 18 and 29 currently have student loan debts in the US. With the ever increasing cost of tuition, the question many young Americans ask themselves, “is college worth it”? We want to visualize the nuances of college tuition and average income by state and degree level. Our visualization will show the financial impact vs. income potentials of obtaining a higher education in the US.

Data Visualization Goals 

Interactive Visual #1
2019 Cloropleth Map
Q: What does debt look like accross the nation, versus income
https://ticas.org/interactive-map/

		Map will include 
		“on hover”:
		Median Income
		“on-click” data:
		Avg Student Debt
		Tuition Costs

		Cloropleth will have two options for colors: 
		Tuition Cost or Median Income. When you click on the state it will popup Tuition Cost, Median Income and Average Student Debt.
		
Interactive Visual #2
Bar Chart
Q: Do states with higher educational attainment have higher personal income?

		Drop down options:
		Number of people graduated with degree levels
		Income by Level of education (Bachelors, Masters, Doctorate)

		Bar Graph will change x axis according to Level of Education or Career Path. It won't be separated by state.

Interactive Visual #3
5 year Line Chart
Q: How has tuition changed over time?
		Drop down options:
		Tuition over time by state
		Income by Level by state

Minimum:
Cloropleth: Tuition Cost, Median Income
Bar graph: Level of Education vs Student Debt

Nice to have:
Cloropleth: Student Debt, Median Income, Unemployment Rates
Bar graph: Level of Education and Degree Path vs Student Debt
Sketch

Sources: 
Income: https://dqydj.com/average-income-by-state-median-top-percentiles/
API: 
https://collegescorecard.ed.gov/data/documentation/
Datasets:
https://www2.census.gov/programs-surveys/demo/tables/school-enrollment/2018/2018-cps/tab06.xlsx
https://www.petersonsdata.com/undergraduate/undergraduate-financial-aid.aspx
https://www.bls.gov/lau/lastrk19.htm
Income by State: https://www.bea.gov/data/income-saving/personal-income-by-state
College Tuition: https://www.kaggle.com/jessemostipak/college-tuition-diversity-and-pay?select=tuition_cost.csv
Unemployment: https://www.bls.gov/emp/tables/unemployment-earnings-education.htm 

Median income by state:
https://fred.stlouisfed.org/release/tables?rid=249&eid=259515#snid=259521
