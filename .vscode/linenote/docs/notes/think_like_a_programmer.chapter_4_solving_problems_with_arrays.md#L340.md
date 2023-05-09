Multiple variables can point to the same memory therefore when you de-allocate one variable, you might not de-allocate the other variable.

This is known as a **dangling reference**.

Once the variable is de-allocated, the memory is no longer accessible, so if you tried to de-allocate the memory again via the other variable, you would get the dreaded **double free**.
