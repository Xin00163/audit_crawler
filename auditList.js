$('.description').each(function () {
  console.log($(this).text().trim().split('\n')[0]);
});

$('.description a').each(function () {
  console.log($(this).attr('href').split('/')[2]);
});
