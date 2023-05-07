---
id: 7rx4f35fgre2yfb0or597r4
title: Chapter 4_solving problems with arrays
desc: ''
updated: 1679875562956
created: 1679875145163
---
## *Warning: There are no "pointers" in Javascript as it is a garbage collected language and handles memory allocation for you!*

**I will still be going over this chapter as it is important to understand how memory allocation works in other languages, but will not be able to provide any examples in Javascript.** 

***I will attempt to translate some things that work in C to Javascript, but it will not be a 1:1 translation.***

# Pointer fundamentals

## What is a pointer?

A pointer is a variable that contains the address of another variable.

The benefits of manipulating pointers are:

    - Runtime efficiency
    - Resizable data structures 
    - Memory sharing

In C++, pointers are declared via the `*` operator.

```c++
int * p;
```

The above reads:

>`int` is used to declare what type of data the pointer will be pointing to.
>
>In this case, it is an integer (`int` being a shorthand).
>
>`*` is used to declare that the variable is a pointer.
>
>`p` is the name of the pointer.

The `*` binds the identifier not the type.

```c++
int * p, q;
```

The above `p` is a pointer to an integer, but `q` is just an integer.

An ampersand (`&`) is used to get the address of a variable.

```c++
int x = 5;
int * p = & x;
```

The above reads:

>`int x = 5;` declares an integer `x` and assigns it the value of `5`.
>
> `int * p = & x;` declares a pointer `p` and assigns it the address of `x`.
>
> `p` now points to `x`.

---

## Memory allocation

Pointers can greatly increase the efficiency of a program by allowing you to allocate memory dynamically.

Reference parameters are used to pass a pointer to a function.

```c++
void foo(int * p) {
    *p = 6;
}

int main() {
    int x = 5;
    foo(& x);
    return 0;
}
```

The above reads:

>`void foo(int * p)` declares a function `foo` that takes a pointer to an integer as a parameter.
>
> `*p = 6;` assigns the value of `6` to the address that `p` is pointing to.
>
> `int x = 5;` declares an integer `x` and assigns it the value of `5`.
>
> `foo(& x);` calls the function `foo` and passes the address of `x` to it.
>
> `return 0;` returns `0` to the operating system.
>
> `main()` is the entry point of the program.
>
> `int` is the return type of the function.
>
> `return 0;` returns `0` to the operating system.

By allowing the called function and the calling function to share the same memory, you can greatly increase the efficiency of your program.

---

## When to use pointers

As stated earlier the benefits of using pointers are:

    - Runtime efficiency
    - Resizable data structures 
    - Memory sharing

They should only be used when more than one of these benefits are needed.

Pointers are some of the most difficult things to understand in programming.

They can also cause some of the most difficult bugs to find.

Therefore, if in doubt its better to err on the side of not using them.

---

<span sty>## The stack and the heap</span>

C++ has two types of memory allocation:

    - The stack
    - The heap

The stack is used for ***static*** (local) memory allocation. 

The heap is used for ***dynamic*** memory allocation.
 

>The stack is **organized**, but the heap is **unorganized**.
>
>***Practically speaking, when you have allocated a block of memory on the stack you can only access the top of the stack.***
>
>***When you have allocated a block of memory on the heap you can access any part of the heap.*** 
>
>The **runtime stack** is used to store information about the function calls that are currently active.
>
>Every time a block of memory is called  a block of memory is added to the top of the stack. 
>
>When a function returns, the block of memory is removed from the top of the stack.
>
>The block of memory that is added to the stack is called a **stack frame** (or **activation record**).

To explain it in a more visual way:

![stack](https://courses.engr.illinois.edu/cs225/fa2022/assets/notes/stack_heap_memory/memory_layout.png)

This image might seem hard to process and it is but we can suffer through it together.

The **high address** is the top of the stack and the **low address** is the bottom of the stack.

Basically, it is the most recent thing that was added to the stack.

The **low address** is the bottom of the stack because it is the lowest address in memory.

Basically, it is the first thing that was added to the stack.

***Note: The stack can grow in either direction, but once it is set it cannot change.***

The **stack pointer** is a register that points to the top of the stack.

The reason it points down is because the stack grows down. It shows you 

The **heap pointer** is a register that points to the top of the heap.

Since the heap is unorganized, it can grow in either direction. 

***Note: The heap can grow in either direction, but once it is set it cannot change.***

The **unitialized data** is the data that is not initialized.

Initialization is the process of setting a variable to a well-defined value at the time of its creation.

In other words, it is the data that is not assigned a value.

In code it looks like: 

```c++
int x;
```

as opposed to

```c++
int x = 5;
```

The **initialized data** is the data that is initialized.

See the above example for what it looks like in code.

The **text** is the code that is being executed.

One of the big issues with memory allocation is that over a period of time of running a program, the stack and the heap can become fragmented.

This causes what is known as **memory fragmentation** or a **memory leak**.

This is when the memory is not being used efficiently and thereby causing the program to run slower.

>Elaborated, let us say that we have variables A, B, and C. 
>
>Let us delete variable B.
>
>Now we have a gap in the memory.
>
>We can replace the gap with a variable of equal size or less, but if we do not then we have a memory leak.
>
>This is because the stack loads in order so it will load A, then the gap, then C. 
>
>This is naturally slower than loading A, then C.

---

## Memory size

One of he first things to be considered when allocating memory is the size of the memory.

While computers have a lot of memory, they do not have an infinite amount of memory.

Modern computers have operating systems that multitask and therefore need to allocate memory to multiple programs at once. 

Programs that are not necessary or running inefficiently can slow down the computer to the point of crashing.

This slowdown due to inefficient memory allocation is known as **thrashing**.

Running out of heap memory is called a **heap overflow**.

Running out of stack memory is called a **stack overflow**.

Runtime stacks also have their limits, the limit being usually 1MB.

## Lifetime 

A variables **lifetime** is the time span between allocation and de-allocation or in other words, how long it exists.

One issue that when a variable is de-allocate the same memory twice it causes a **double free**.

This is because the memory is already free and therefore cannot be freed again.

This might sound like an impossible situation to end up in, but it is actually quite common.

Multiple variables can point to the same memory therefore when you de-allocate one variable, you might not de-allocate the other variable.

This is known as a **dangling reference**.

Once the variable is de-allocated, the memory is no longer accessible, so if you tried to de-allocate the memory again via the other variable, you would get the dreaded **double free**.


