import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// A `main` function so that we can use async/await
async function main() {
	const user =await prisma.user.findMany()
	console.log(user);
	
	// // Create a new user called `Alice`
	// const newUser = await prisma.createUser({ name: 'Alice' })
	// console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`)
  
	// // Read all users from the database and print them to the console
	// const allUsers = await prisma.users()
	// console.log(allUsers)
  }
  
  main()
  .catch(e => console.error(e))
  .finally(async ()=>{
	await prisma.$disconnect()
  })