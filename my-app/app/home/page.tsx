'use client'

import React, { useState, useEffect } from 'react';

interface Project {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
}

interface Task {
  id: string;
  projectId: string;
  title: string;
  completed: boolean;
  createdAt: Date;
}

const HomePage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [newProjectName, setNewProjectName] = useState<string>('');
  const [newProjectDescription, setNewProjectDescription] = useState<string>('');
  const [newTaskTitle, setNewTaskTitle] = useState<string>('');
  const [showNewProjectForm, setShowNewProjectForm] = useState<boolean>(false);

  // Load data from localStorage on initial render
  useEffect(() => {
    const savedProjects = localStorage.getItem('projects');
    const savedTasks = localStorage.getItem('tasks');
    
    if (savedProjects) {
      const parsedProjects = JSON.parse(savedProjects).map((project: any) => ({
        ...project,
        createdAt: new Date(project.createdAt)
      }));
      setProjects(parsedProjects);
    }
    
    if (savedTasks) {
      const parsedTasks = JSON.parse(savedTasks).map((task: any) => ({
        ...task,
        createdAt: new Date(task.createdAt)
      }));
      setTasks(parsedTasks);
    }
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleNewProject = () => {
    if (!newProjectName.trim()) {
      alert('Please enter a project name');
      return;
    }

    const newProject: Project = {
      id: Date.now().toString(),
      name: newProjectName,
      description: newProjectDescription || 'No description',
      createdAt: new Date()
    };
    
    setProjects([...projects, newProject]);
    setNewProjectName('');
    setNewProjectDescription('');
    setShowNewProjectForm(false);
    setSelectedProject(newProject);
  };

  const handleDeleteProject = (projectId: string) => {
    if (confirm('Are you sure you want to delete this project and all its tasks?')) {
      setProjects(projects.filter(project => project.id !== projectId));
      setTasks(tasks.filter(task => task.projectId !== projectId));
      
      if (selectedProject && selectedProject.id === projectId) {
        setSelectedProject(null);
      }
    }
  };

  const handleAddTask = () => {
    if (!selectedProject) return;
    if (!newTaskTitle.trim()) {
      alert('Please enter a task title');
      return;
    }

    const newTask: Task = {
      id: Date.now().toString(),
      projectId: selectedProject.id,
      title: newTaskTitle,
      completed: false,
      createdAt: new Date()
    };

    setTasks([...tasks, newTask]);
    setNewTaskTitle('');
  };

  const handleToggleTask = (taskId: string) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  };

  const handleDeleteTask = (taskId: string) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const projectTasks = tasks.filter(task => 
    selectedProject && task.projectId === selectedProject.id
  );

  const completedTasks = projectTasks.filter(task => task.completed).length;
  const totalTasks = projectTasks.length;
  const progressPercentage = totalTasks ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-72 bg-white p-4 border-r border-gray-200 shadow-sm overflow-y-auto">
        <div className="mb-6">
          {!showNewProjectForm ? (
            <button 
              onClick={() => setShowNewProjectForm(true)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors"
            >
              New Project
            </button>
          ) : (
            <div className="bg-gray-50 p-4 rounded-md mb-4 text-black">
              <h3 className="font-medium mb-2">Create Project</h3>
              <input
                type="text"
                placeholder="Project name"
                className="w-full p-2 border rounded-md mb-2"
                value={newProjectName}
                onChange={(e) => setNewProjectName(e.target.value)}
              />
              <textarea
                placeholder="Description (optional)"
                className="w-full p-2 border rounded-md mb-2"
                value={newProjectDescription}
                onChange={(e) => setNewProjectDescription(e.target.value)}
              />
              <div className="flex gap-2">
                <button 
                  onClick={handleNewProject}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded-md text-sm"
                >
                  Create
                </button>
                <button 
                  onClick={() => setShowNewProjectForm(false)}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-1 px-3 rounded-md text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
        
        <div className='text-black'>
          <h2 className="text-lg font-semibold mb-2">Projects</h2>
          <ul className="space-y-1">
            {projects.map(project => (
              <li key={project.id} className="group">
                <div 
                  className={`flex items-center justify-between rounded-md cursor-pointer group ${
                    selectedProject?.id === project.id ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-100'
                  }`}
                >
                  <div
                    className="flex-1 py-2 px-3"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="font-medium">{project.name}</div>
                    <div className="text-xs text-gray-500">
                      {new Date(project.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteProject(project.id);
                    }}
                    className="text-gray-400 hover:text-red-500 p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </li>
            ))}
            {projects.length === 0 && (
              <li className="text-gray-500 text-sm py-2 px-3">No projects yet</li>
            )}
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 text-black">
        {selectedProject ? (
          <div>
            <div className="mb-8">
              <h1 className="text-2xl font-bold">{selectedProject.name}</h1>
              <p className="text-gray-600">{selectedProject.description}</p>
              
              {/* Progress bar */}
              <div className="mt-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Progress</span>
                  <span className="text-sm font-medium">{completedTasks}/{totalTasks} tasks</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
                </div>
              </div>
            </div>
            
            {/* Task Form */}
            <div className="mb-6">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Add a new task..."
                  className="flex-1 p-2 border rounded-md"
                  value={newTaskTitle}
                  onChange={(e) => setNewTaskTitle(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && newTaskTitle.trim()) {
                      handleAddTask();
                    }
                  }}
                />
                <button
                  onClick={handleAddTask}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-md transition-colors"
                >
                  Add
                </button>
              </div>
            </div>
            
            {/* Tasks List */}
            <div>
              <h2 className="text-lg font-semibold mb-2">Tasks</h2>
              <ul className="space-y-2">
                {projectTasks.length === 0 ? (
                  <li className="text-gray-500">No tasks yet. Add your first task above.</li>
                ) : (
                  projectTasks.map(task => (
                    <li key={task.id} className="flex items-center justify-between bg-white p-3 border rounded-md group">
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={task.completed}
                          onChange={() => handleToggleTask(task.id)}
                          className="w-5 h-5 rounded"
                        />
                        <span className={task.completed ? 'line-through text-gray-400' : ''}>
                          {task.title}
                        </span>
                      </div>
                      <button
                        onClick={() => handleDeleteTask(task.id)}
                        className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
            <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h2 className="text-xl font-medium mb-2">No Project Selected</h2>
            <p className="max-w-md">Select a project from the sidebar or create a new one to get started</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;