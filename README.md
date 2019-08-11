# jest-vue-todo

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your unit tests
```
yarn run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## note
- TDD 测试驱动开发, 能提高代码质量
- 单元测试， 测试覆盖率高， 业务耦合度高，代码量大，过于独立
- BDD 行为驱动开发

### BDD 和 TDD 对比
- TDD
  1. 先写测试在写代码
  2. 一版结合单元测试使用，是白盒测试
  3. 测试重点在代码
  4. 安全感低
  5. 速度快
- BDD
  1. 先写代码后写代码
  2. 一般是结合集成测试使用，是黑盒测试
  3. 测试重点是UI
  4. 安全感高
  5. 速度慢