  console.log("Hello World with no function!");

  $(document).ready(function() {
  // all custom jQuery will go here

  console.log("IN document ready function");

  $.getJSON("danstoner_dailymile_running_entries_postETL_nokeys.json", function (data) {
    console.log("got it");
$('#entries-table').dynatable({
    dataset: {
	   totalRecordCount: true,
	   perPageOptions: [25,100,500],
           records: data

        },
    writers: {
	'url': function(v) {
	    return '<a href="' + v.url + '">' + v.url + '</a>';
	    }
	},
    table: {
	defaultColumnIdStyle: 'underscore'
    }
})

  })
  .fail(function () {
      console.log('error reading or parsing JSON');
});

});
