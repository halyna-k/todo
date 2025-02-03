import { Container, TaskManagement } from "../components";

const DUMMY_DATA = [
   { user_id: "1", id: 1, title: "Task 1", description: "This is task 1", deadline: "01/03/2025", status: "TO DO" },
   { user_id: "2", id: 2, title: "Task 2", description: "This is task 2", deadline: "01/03/2025", status: "TO DO" },
   { user_id: "3", id: 3, title: "Task 3", description: "This is task 3", deadline: "01/05/2025", status: "IN PROGRESS" },
   { user_id: "4", id: 4, title: "Task 4", description: "This is task 4", deadline: "01/06/2025", status: "TO DO" },
   { user_id: "5", id: 5, title: "Task 5", description: "This is task 5", deadline: "01/07/2025", status: "IN PROGRESS" },
   { user_id: "6", id: 6, title: "Task 6", description: "This is task 6", deadline: "01/08/2025", status: "COMPLETED" },
   { user_id: "7", id: 7, title: "Task 7", description: "This is task 7", deadline: "01/04/2025", status: "TO DO" },
   { user_id: "8", id: 8, title: "Task 8", description: "This is task 8", deadline: "01/09/2025", status: "IN PROGRESS" },
   { user_id: "9", id: 9, title: "Task 9", description: "This is task 9", deadline: "10/03/2025", status: "TO DO" },
 ]

const Dashboard = () => {
  return (
    <Container>
      <TaskManagement tasks={DUMMY_DATA || []} />
    </Container>
  );
}

export default Dashboard;
