// import { useForm } from '@mantine/form';
// import html_gen from '../joes-tools/html'

// const form = useForm({
//     initialValues: {
//       email: 'jjackson@itscovered.com',
//       termsOfService: false,
//     },

//     validate: {
//       email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
//     },
//   });
//   function Form() {
//   return (
  
    

//     <div className={classes.wrapper}>
//       <div id= "display"></div>
//       <div className={classes.child}>Custom CSS</div>

//       <Box sx={{ maxWidth: 300 }} mx="auto">
//       <form onSubmit={form.onSubmit(html_gen)}>
//         <TextInput
//           required
//           label="Email"
//           placeholder="your@email.com"
//           {...form.getInputProps('email')}
//         />

//         <Checkbox
//           mt="md"
//           label="I agree to sell my privacy"
//           {...form.getInputProps('termsOfService', { type: 'checkbox' })}
//         />

//         <Group position="right" mt="md">
//           <Button type="submit">Submit</Button>
//         </Group>
//       </form>
//     </Box>
//     </div>
//   )
//   }