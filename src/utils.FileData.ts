const formData = new FormData();
formData.append('file', new File(["This must be gold!"], 'Hello'));

console.log(formData.get('file'));

console.log(formData.entries().next().value);
