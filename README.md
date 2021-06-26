<div align="center">
  <h1>empty-ui</h1>
  <p>a very simple, configuration-based ui</p>
</div>

## Install

```
yarn add empty-ui
```

## Usage

- There are no styles built in to the UI.
- Wrap your component with the provider. Define your styles with the **`config`** props.
  ```tsx
  <UIProvider
    config={{
      buttons: {
        primary: 'primary-button'
      }
    }}
  >
    <App />
  </UIProvider>
  ```

##

### &copy; 2021 | TheBoringDude
