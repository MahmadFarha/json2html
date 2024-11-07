// json2html.js
export default function json2html(data) {
    // Create the start of the table with a data-user attribute
    let html = '<table data-user="mahmadfarha43@gmail.com">';
    
    // Add the table header row
    html += '<thead><tr>';
    // Add headers dynamically based on the keys of the first object in the array
    const headers = Object.keys(data[0]);
    headers.forEach(header => {
      html += `<th>${header}</th>`;
    });
    html += '</tr></thead>';
    
    // Add table body rows
    html += '<tbody>';
    data.forEach(row => {
      html += '<tr>';
      headers.forEach(header => {
        html += `<td>${row[header] || ''}</td>`; // Handles missing properties
      });
      html += '</tr>';
    });
    html += '</tbody>';
  
    // Close the table tag
    html += '</table>';
  
    // Return the generated HTML table as a string
    return html;
  }
  