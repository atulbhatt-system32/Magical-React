# Boolean Dependency

This project is to check how a plain js variable create with let, const or var affects the useEffect hook.

## Findings

- If the variable is created with let, var (const value can't be reassigned), the useEffect hook will not be triggered. This is because the useEffect hook is triggered only when the dependency array changes. Since the variable is created with let, the reference to the variable is not changed. Hence, the useEffect hook is not triggered.

- However, the value of the variable can be changed. This is because the value of the variable is not the same as the reference to the variable. Hence, the useEffect hook is triggered.
