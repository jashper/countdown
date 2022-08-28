#Overall version
 
1.1: this version causes that target month before Feb will get -1 day in condition statement #line24. But, in line46: "two negatives make an affirmative", which create a day plus(#error1).(see this at #1 in countdown.js).
  
       line46: "two negatives make an affirmative" (#error1)
       line46: day = day - (-1) = day + 1
       #error1 add an extra days to final result.

The leap days will not take count when target date is less than FEB. Its weird add those days when its count only till JAN, right?

        targetDate: 2023-2-27  (below as tD)
        dateNow   : 2022-8-28   (below as dN)

         1.1：-
         line24:  target.getMonth() < 2 ? leap-=1 : leap = leap;

 Final result shows 184 days that cause by #error 1.
tD is less than FEB and its non-leap year, condition statement will get -1. And the result pass through like this:-

       <sub>line46: day = 183 - (-1) = 184<sub>

The result should be 183 days. But,#error1 cause an extra days in final.
**This has been revised in 1.2.**

     line46: target.getMonth() < 2 && ary.includes(dateEnd) ? leap-=1 : leap = leap;

     Hence, 1.1 condition statement cause #error1 will get 0.**
In 1.2, countdown tD there is leap years and less than Feb will be check before subtract 1 day.   


