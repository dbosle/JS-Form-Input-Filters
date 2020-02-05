# JS Form Input Filters
HTML Form Input Filters

## Usage
* Import JS file to your page
```
<script src="inputFilters.js"></script>
```

* For example you have these input fields:
```
<input type="text" id="numberInput" />
<input type="text" id="alphabeticalInput" />
<input type="text" id="alphaNumInput" />
```

* Now we can set these html elements to accept only the numbers and prices:
```
<script>
   setOnlyNumberInput("numberInput"); // => Sets input field only for numeric characters
   setOnlyAlphaInput("alphabeticalInput"); // => Sets input field only for alphabetical characters
   setOnlyAlphaNumInput("alphaNumInput"); // => Sets input field only for alpha numeric characters
</script>
```

