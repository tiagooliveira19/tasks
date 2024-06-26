<?php

use App\Http\Controllers\Api\TaskController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/userLogged', [ProfileController::class, 'userLogged']);
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

// Get all tasks
Route::get('/api/tasks', [TaskController::class, 'index']);

// Save new task
Route::post('/api/tasks', [TaskController::class, 'store']);

// Get single task
Route::get('/api/tasks/{id}',[TaskController::class, 'show']);

// Update task
Route::put('/api/tasks/{id}',[TaskController::class, 'update']);

// Delete task
Route::delete('/api/tasks/{id}', [TaskController::class, 'destroy']);

Route::view('/{any}', 'dashboard')
    ->middleware(['auth'])
    ->where('any', '.*');
