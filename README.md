## Date Difference

Compute difference between two dates without using SDK libraries for date manipulation (e.g. Date, Calendar classes) etc.

See details in `PROBLEM.md`


#### Assumptions

* Input dates can range from year 0001 - 9999
* Invalid inputs are ignored i.e. lines in input file not matching `DD MM YYYY, DD MM YYYY` format
* Invalid dates or ranges will show -1 days e.g.
    * Day or Month out of range
    * From date later than To date
* Start and end dates are inclusive, Thus range on same day will have 1 day duration
* [Third Party Tool][] is used for manual validation of long ranges


#### Dependencies

[Node.js][]


#### Setup

`npm i`

This will install all dependencies


#### Run

`npm run app` OR `run` batch file

This will run `src/index.js`


#### Test

Update `test-data.txt` and run app


#### Develop

Follow [IntelliJ Setup] for enabling ES6 support

#### Sample Outputs

```
01 01 2016, 01 01 2016, 1	- Same Day

01 01 2016, 31 01 2016, 31	- Jan
01 02 2016, 29 02 2016, 29	- Feb (Leap Year)
01 03 2016, 31 03 2016, 31	- Ma
01 04 2016, 30 04 2016, 30	- Apr
01 05 2016, 31 05 2016, 31	- May
01 06 2016, 30 06 2016, 30	- June
01 07 2016, 31 07 2016, 31	- July
01 08 2016, 31 08 2016, 31	- Aug
01 09 2016, 30 09 2016, 30	- Sep
01 10 2016, 31 10 2016, 31	- Oct
01 11 2016, 30 11 2016, 30	- Nov
01 12 2016, 31 12 2016, 31	- Dec

01 01 2016, 31 12 2016, 366	- Leap Year Total
01 01 2015, 31 12 2015, 365	- Non-Leap Year Total

01 01 2015, 31 12 2016, 731	- Leap + Non-Leap Year Total

15 06 2013, 25 05 2015, 710	- Non-Leap + Non-Leal Total

15 06 2000, 25 05 2015, 5458    - Extended date range (verified with third party tool)


02 12 2016, 01 12 2016, -1	- Invalid - From Day Later
01 12 2016, 01 11 2016, -1	- Invalid - From Month Later
01 12 2016, 01 12 2015, -1	- Invalid - From Year Later

29 02 2015, 01 03 2016, -1	- Invalid - Day out of Range (For non-leap year)
01 13 2016, 01 12 2016, -1	- Invalid - Month Out of Range

01 2016, 01 12 99991		- Invalid - Incomplete date 	(WONT PRINT)
01 01 2016, 01 12 99991		- Invalid - Year out of Range  	(WONT PRINT)
```


[IntelliJ Setup]: https://blog.jetbrains.com/webstorm/2015/05/ecmascript-6-in-webstorm-transpiling#babelfilewatcher 
[Node.js]: https://nodejs.org/en/download/
[Third Party Tool]: https://www.timeanddate.com/date/durationresult.html?m1=6&d1=15&y1=2000&m2=5&d2=25&y2=2015&ti=on