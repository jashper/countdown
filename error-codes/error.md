Overall version
 
v1: this version causes that target month before Feb will get -1 day in condition statement #line24. But, in line:52 "two negatives make an affirmative", which create a day plus(#error1).(see this at #1 in countdown.js).
  
       line:52 "two negatives make an affirmative" (#error1)

v1 review
The leap days will not take count when target date is less than FEB. Its weird add those days when its count only till JAN, right?

       eg:-
        targetDate: 2023-2-27  (below as tD)
        dateNow   : 2022-8-28   (below as dN)

       condition statements:-
           line24:  target.getMonth() < 2 ? leap-=1 : leap = leap;

 Final result shows 184 days and cause by #error 1.
 tD is less than FEB and its non-leap year, condition statement will get -1. And the result pass through:-

       line46: day = 183 - (-1) = 184
       Its cause by #error1 to add an extra days.


 v2 review:
 #error1 (revised)
 
    condition statements :-
    line46: target.getMonth() < 2 && ary.includes(dateEnd) ? leap-=1 : leap = leap;

In v2, leap year that contains leap and less than Feb will be check before -1 days
    
    Hence, v1 condition statement will get 0.
For more, only those are leap year and less than FEB pass through only will get -1.

