import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { log } from 'node:console';
interface TodoItem {
  id: number;
  name: string;
  completed: boolean;
  isEditing: boolean;
}
@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ToDoList';

newTaskName: string = '';
todoItems: TodoItem[] = [];
private nextId: number = 1;
private originalName: string = '';

  ngOnInit(): void {
    this.loadTodoItems();
  }

  private loadTodoItems(): void {
    const savedTodos = localStorage.getItem('todoItems');
    if (savedTodos) {
      this.todoItems = JSON.parse(savedTodos);

      if (this.todoItems.length > 0) {
        this.nextId = Math.max(...this.todoItems.map(item => item.id)) + 1;
      }
    }
  }

  private saveTodoItems(): void {
    localStorage.setItem('todoItems', JSON.stringify(this.todoItems));
  }

addTask():void{

  if (this.newTaskName.trim()) {
      const newTask: TodoItem = {
        id: this.nextId++,
        name: this.newTaskName.trim(),
        completed: false,
        isEditing: false
      };
      this.todoItems.push(newTask);
    }


  this.newTaskName = '';
  this.saveTodoItems();

  console.log('Task added:', this.todoItems);


}

startEdit(item: TodoItem): void {
  if (!item.completed) {
    this.originalName = item.name;

    item.isEditing = true;
  }
}

deleteTask(id: number): void {
    this.todoItems = this.todoItems.filter(item => item.id !== id);
    this.saveTodoItems();
    console.log('Task deleted:', id);
}

  saveEdit(item: TodoItem): void {
    if (item.name.trim()) {
      item.name = item.name.trim();
      item.isEditing = false;
    } else {
      // If empty, restore original name
      item.name = this.originalName;
      item.isEditing = false;
    }
    this.saveTodoItems();
    console.log('Task updated:', item);


  }

  cancelEdit(item: TodoItem): void {
    item.name = this.originalName;
    item.isEditing = false;
  }

    onCheckboxChange(): void {
    this.saveTodoItems();
  }

    get completedCount(): number {
    return this.todoItems.filter(item => item.completed).length;
  }

  get remainingCount(): number {
    return this.todoItems.filter(item => !item.completed).length;
  }




}
