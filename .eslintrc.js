module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['plugin:react/recommended', 'airbnb'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: ['react'],
    rules: {
        indent: ['error', 4, { SwitchCase: 1 }],
        'react/prop-types': 0,
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'comma-dangle': ['error', 'never'],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': [1, 'first']
    }
};
