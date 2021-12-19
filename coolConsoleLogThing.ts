// COOL CONSOLE.LOG - TypeScript version

/**
 * A cooler version of `console.log()`.
 * @param title The first message in the log, which will be colored.
 * @param titleColor The color for the log title; Must be a valid CSS color or variable.
 * @param message The rest of the logged message.
 */
export const coolConsoleLog = (
  title: string,
  titleColor: string,
  ...message: string[]
) =>
  console.log(
    `%c${title}`,
    `background-color:${titleColor};color:white;padding:0.25rem;border-radius:0.25rem;font-weight:bold`,
    ...message
  );

/**
 * A cooler version of `console.error()`.
 * @param title The first message in the log, which will be colored.
 * @param titleColor The color for the log title; Must be a valid CSS color or variable.
 * @param message The rest of the logged message.
 */
export const coolConsoleError = (
  title: string,
  titleColor: string = "var(--override-error-text-color)",
  ...message: string[]
) =>
  console.error(
    `%c${title}`,
    `background-color:${titleColor};color:white;padding:0.25rem;border-radius:0.25rem;font-weight:bold`,
    ...message
  );

/**
 * A cooler version of `console.warn()`.
 * @param title The first message in the log, which will be colored.
 * @param titleColor The color for the log title; Must be a valid CSS color or variable.
 * @param message The rest of the logged message.
 */
export const coolConsoleWarn = (
  title: string,
  titleColor: string = "var(--override-console-warning-text-color)",
  ...message: string[]
) =>
  console.warn(
    `%c${title}`,
    `background-color:${titleColor};color:white;padding:0.25rem;border-radius:0.25rem;font-weight:bold`,
    ...message
  );

/* Usage examples:

coolConsoleLog("Message", "dodgerblue", "This is a really cool messsage! 😲");

// Cool error logging, also shows use of more than 3 params
const err = new Error("This is an error lol 😈");
coolConsoleError(
 err.name,
 undefined,
 err.message,
 `\n${err.stack.split("\n").slice(1).join("\n")}`
);

// If the 2nd param is undefined, the defualt color will be used; The same is true for coolConsoleError.
coolConsoleWarn(
 "Warning",
 undefined,
 "This function is too cool, stop using it NOW!"
);

*/
