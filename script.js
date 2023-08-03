// Function to apply past, present, and future styles to time blocks
// Function to apply past, present, and future styles to time blocks
function applyTimeBlockStyles() {
  const currentHour = dayjs().hour();

  // Loop through each time block and apply the appropriate style class
  $('.time-block').each(function () {
    const hourBlock = parseInt($(this).attr('id').split('-')[1]);

    if (hourBlock < currentHour) {
      $(this).addClass('past').removeClass('present future');
    } else if (hourBlock === currentHour) {
      $(this).addClass('present').removeClass('past future');
    } else {
      $(this).addClass('future').removeClass('past present');
    }
  });
}


// Function to save text data to local storage
function saveTextData() {
  $('.time-block').each(function () {
    const timeBlockId = $(this).attr('id');
    const textData = $(this).find('.description').val();
    localStorage.setItem(timeBlockId, textData);
  });
}

// Function to load saved text data from local storage
function loadTextData() {
  $('.time-block').each(function () {
    const timeBlockId = $(this).attr('id');
    const textData = localStorage.getItem(timeBlockId);
    if (textData) {
      $(this).find('.description').val(textData);
    }
  });
}

// Call the function to apply time block styles on page load
applyTimeBlockStyles();

// Call the function to load saved text data on page load
loadTextData();

// Save button click event listener
$('.saveBtn').on('click', function () {
  saveTextData();
});
