class Task {
  constructor(
    id,
    title,
    description,
    status,
    priority,
    dueDate,
    userId
  ) 
  {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
    this.priority = priority;
    this.dueDate = dueDate;
    this.userId = userId;
  }
}

module.exports = Task;