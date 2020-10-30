  $(document).ready(function() {
  // all custom jQuery will go here


  $.getJSON("danstoner_dailymile_running_entries_postETL_nokeys.json", function (data) {
  //  console.log("got it");
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
    },
    inputs: {
    searchPlacement: 'before',
    perPagePlacement: 'before',
    paginationLinkPlacement: 'before',
    recordCountPlacement: 'before'
    }
})

  })
  .fail(function () {
      console.log('error reading or parsing JSON');
});

});
