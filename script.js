const byteSize = (str) => {
  // write your code here
	 const encoder = new TextEncoder();
  const encodedData = encoder.encode(str);
  
  // Get the size of the encoded data
  const sizeInBytes = encodedData.length;
  
  return sizeInBytes;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
