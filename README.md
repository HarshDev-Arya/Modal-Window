# Window Modal

Window Modal is a simple and customizable JavaScript modal library that provides an easy way to create modal windows for your web applications. It is designed to be lightweight, flexible, and easy to use.

## Features

- **Customizable**: Easily customize the appearance and behavior of your modal windows.
- **Responsive**: Modal windows are responsive and work well on various screen sizes.
- **Easy to Use**: Simple API for creating, opening, and closing modal windows.
- **Event Hooks**: Support for event hooks to trigger actions before or after modal events.

## Getting Started

### Installation

To use Window Modal in your project, you can either download the source code directly from this repository or install it via a package manager.

#### Via npm:

```bash
npm install window-modal
```

#### Via yarn:

```bash
yarn add window-modal
```

### Usage

1. Include the CSS and JavaScript files in your project:

   ```html
   <link rel="stylesheet" href="path/to/window-modal.css">
   <script src="path/to/window-modal.js"></script>
   ```

2. Create a modal instance:

   ```javascript
   const modal = new WindowModal({
     // options here
   });
   ```

3. Open the modal:

   ```javascript
   modal.open();
   ```

## Options

Window Modal supports the following options:

- **`option1`**: Description of option 1.
- **`option2`**: Description of option 2.
- ...

## Events

Window Modal triggers the following events:

- **`event1`**: Description of event 1.
- **`event2`**: Description of event 2.
- ...

## Examples

Here's an example of how to create and customize a modal window:

```javascript
const modal = new WindowModal({
  content: 'This is the content of the modal window.',
  width: '400px',
  height: '200px',
  onClose: () => {
    console.log('Modal closed!');
  }
});

// Open the modal
modal.open();
```

## Contributing

Contributions are welcome! Fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE.md).
