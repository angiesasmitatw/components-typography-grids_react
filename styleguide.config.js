module.exports = {
  ignore: ['**/components/commons/index.js'],
  sections: [
		{
			name: 'Building Blocks',
			sections: [
				{
					name: 'Div-based Elements',
          components: () => ['./src/components/commons/Box/index.jsx',
          './src/components/commons/Flex/index.jsx'],
					exampleMode: 'hide', 
					usageMode: 'expand', 
				},
				{
          name: 'Grid',
          components: () => ['./src/components/commons/Grid/GridColumn.jsx',
          './src/components/commons/Grid/GridContainer.jsx'],
					exampleMode: 'hide', 
					usageMode: 'expand', 
				},
			],
			sectionDepth: 0,
		},
		{
      name: 'Basic Components',
			sections: [
        {
          name: 'Buttons',
					components: () => [
            './src/components/commons/Button/index.jsx',
					],
					exampleMode: 'hide', 
					usageMode: 'hide', 
				},
				{
					name: 'Checkboxes',
					components: () => ['./src/components/commons/Checkbox/index.jsx'],
					exampleMode: 'hide', 
					usageMode: 'expand', 
				},
				{
					name: 'Input Boxes',
					components: () => ['./src/components/commons/InputBox/index.jsx'],
					exampleMode: 'hide', 
					usageMode: 'expand', 
				},
				{
					name: 'Overlay',
					components: () => ['./src/components/commons/Overlay/index.jsx'],
					exampleMode: 'hide', 
					usageMode: 'expand', 
				},
			],
			sectionDepth: 0,
    },
    {
      name: 'Composite Components',
      sections: [{
        components: () => ['./src/components/GridLayout/index.jsx'],
        exampleMode: 'hide', 
					usageMode: 'expand', 
      }],
      sectionDepth: 0,
    },
    {
      name: 'Custom Components',
      sections: [{
        name: 'Sign-up Page',
        components: () => ['./src/components/SignUp/TitleText.jsx',
                          './src/components/SignUp/HelperText.jsx',
                          './src/components/SignUp/SignUpInputBox.jsx'],
        exampleMode: 'hide', 
					usageMode: 'expand', 
      }],
      sectionDepth: 0,
    }
	],
};