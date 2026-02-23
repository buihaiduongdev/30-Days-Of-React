Var: func scope --> dont use anymore
Let, Const: block scope --> always use this

Closure là khả năng một hàm con có thể ghi nhớ và truy cập vào phạm vi (scope) của hàm cha nó, ngay cả khi hàm cha đã thực thi xong. --> Hooks

Hosting:
Function: yes
Var: yes --> undefined
Let, Const, Class: yes (block to use) --> TDZ (temporal dead zone)

