//Let's make this page responsive!
$(document).ready(function()
{
  //Make all outgoing links open in a new page
  $("a[href^='http']").attr('target','_blank');
});