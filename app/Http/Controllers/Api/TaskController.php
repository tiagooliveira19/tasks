<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\TaskRequest;
use App\Http\Resources\TaskResource;
use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tasks = Task::select('tasks.id', 'tasks.title', 'tasks.description', 'tasks.created_at', 'users.name')
                    ->join('users', 'users.id', '=', 'tasks.user_id')->where('users.id', Auth::user()->id)->get();
        $tasksList = array();

        foreach ($tasks as $task) {

            $tasksList[] = [
                'id' => $task->id,
                'title' => $task->title,
                'description' => mb_strimwidth($task->description, 0, 100, '...'),
                'created_at' => date('d/m/Y', strtotime($task->created_at)),
                'user_id' => $task->name
            ];
        }

        return TaskResource::collection($tasksList);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TaskRequest $request)
    {
        $task = Task::create($request->validated());

        return new TaskResource($task);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $task = new Task();
        $response = $task::where('id', $id)->first();

        return new TaskResource($response);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(TaskRequest $request, $id)
    {
        $task = new Task();
        $task::where('id', $id)->update($request->validated());

        return new TaskResource($task);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {

        $task = new Task();
        $task->find($id)->delete();

        return response()->noContent();
    }
}
