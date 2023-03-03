// var a=[1,2,3,4,5,6,7,8,9,10];
// var total=0;
// for(i=0;i<a.length;i++)
// {
	// total+=a[i];
// }
// document.write(total);
// document.write("<br>");


function add(a)
{
	total=0;
	for(i=0;i<a.length;i++)
	{
		total+=a[i];
	}
	return total;
}
document.write(add(a))