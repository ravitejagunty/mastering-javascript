/* the process of holding a value to be used later on or access imeediately is called binding in javascript, and is usually declared by var or let */

/* anything that comes after var or let is telling us that there is a binding with name and store the value of the bindings in it */

let x = 10;

/* In the above line, x is holding the value 10 and it can be leveraged anywhere else in the file as expression to perform different operations */

//example 
console.log(x*x); //console.log is javascript inbuilt function

/* output: 100 */

/*
The value x can be reassigned later as well for example */
x = 20;
console.log(x)

/* output: 20, a binding always takes the latest value it is assigned to */

/* pre defeined keywords in javascript which cannot be used as names for binding
break
case
catch
class
const
continue
debugger
default
delete
do
else
enum
export
extends
false
finally
for
function
if
implements
import
interface
in
instanceof
let
new
package
private
protected
public
return
static
super
switch
this
throw
true
try
typrof
var
void
while
with
yield
*/