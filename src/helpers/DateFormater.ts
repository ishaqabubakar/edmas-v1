function formatDate(inputDate:any) {
    const parts = inputDate.split('/');
    const formattedDate = new Date(`${parts[1]}/${parts[0]}/${parts[2]}`);
    
    const options = { day: 'numeric', month: 'short', year: 'numeric' } as any;
    const formattedString = formattedDate.toLocaleString('en-US', options);
  
    return formattedString;
  }
  
//   // Example usage
//   const formattedDate = formatDate('30/10/2023');
  export default formatDate

  