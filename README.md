# pi-auto-agents

> Intelligent task orchestrator that breaks down complex requests using specialized agents

[![npm version](https://img.shields.io/npm/v/pi-auto-agents.svg)](https://www.npmjs.com/package/pi-auto-agents)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

The `pi-auto-agents` skill automatically detects complex coding and development tasks and orchestrates them across specialized sub-agents for thorough analysis, planning, implementation, testing, and review.

> **Important**: This skill **requires** the `pi-subagents` extension to work. It depends on the `subagent` and `subagent_status` tools provided by [`pi-subagents`](https://www.npmjs.com/package/pi-subagents).

## Features

- **Intelligent Task Routing**: Analyzes requests to determine when multi-agent coordination is needed
- **Specialized Agents**: Pre-built agents for different phases of development
- **Workflow Orchestration**: Supports sequential chains and parallel execution
- **Mandatory Testing & Review**: Enforces testing after implementation and quality review
- **Progress Tracking**: Maintains detailed progress documentation
- **Data Flow**: Automatic passing of context between agents using `{previous}` template variables

## Available Agents

- **`scout`**: Fast codebase exploration and analysis (lightweight and quick)
- **`context-builder`**: Builds comprehensive context and meta-prompts from requirements
- **`planner`**: Creates detailed implementation plans and task breakdowns
- **`worker`**: General-purpose implementation and coding tasks
- **`researcher`**: Conducts web research and gathers external information
- **`reviewer`**: Code review, validation, and quality assurance

## Installation

```bash
npm install pi-auto-agents
```

This package includes the skill definition at `skills/auto-agents/SKILL.md` and will be automatically discovered by Pi.

## How It Works

The orchestration follows a structured workflow:

1. **ANALYZE** - Thoroughly understand the user's request
2. **PLAN** - Create an optimal workflow with verification steps
3. **EXECUTE** - Run chains or parallel agent tasks using the `subagent` tool
4. **TEST & DEBUG** - Always test code after implementation and fix issues
5. **REVIEW** - Perform quality assurance with the reviewer agent
6. **VERIFY** - Confirm the solution works end-to-end
7. **SYNTHESIZE** - Provide clear summary of results

## Usage

### Basic Chain (Recommended for Development Tasks)

```json
{
  "chain": [
    {"agent": "scout"},
    {"agent": "context-builder"},
    {"agent": "planner"},
    {"agent": "worker"},
    {"agent": "reviewer"}
  ]
}
```

### With Custom Tasks and Parallel Execution

```json
{
  "chain": [
    {"agent": "scout", "task": "Analyze current codebase structure"},
    {
      "parallel": [
        {"agent": "worker", "task": "Implement frontend changes"},
        {"agent": "worker", "task": "Update backend API"}
      ]
    },
    {"agent": "reviewer"}
  ]
}
```

### Single Agent Call

```json
{
  "agent": "planner",
  "task": "Create a detailed plan for adding user authentication"
}
```

### Monitoring Async Runs

```json
{
  "agent": "subagent_status",
  "id": "run-id-here"
}
```

## Testing & Debugging Policy

**MANDATORY** for all implementation tasks:
- After any `worker` phase, immediately test the changes
- Use `bash` tool to run tests and verify functionality
- Create reproduction test cases for bugs
- Document all test results in `progress.md`
- Only proceed to review after tests pass

## Dependencies

**This skill is heavily dependent on [`pi-subagents`](https://www.npmjs.com/package/pi-subagents)** — it provides the core `subagent` and `subagent_status` tools that make multi-agent orchestration possible.

Without `pi-subagents`, this skill will not function.

## Acknowledgments

Thank you to the creators and maintainers of:
- **`pi-subagents`** — for building the powerful sub-agent infrastructure this skill depends on
- **Pi Framework** (`@mariozechner/pi-coding-agent`) — for creating such an elegant and extensible coding agent platform

Your work made this orchestration layer possible. 🙏

## Project Structure

```
.
├── skills/
│   └── auto-agents/
│       └── SKILL.md          # Full skill documentation
├── README.md                 # This file
├── package.json
└── install.mjs
```

## Links

- [Skill Documentation](skills/auto-agents/SKILL.md)
- [Repository](https://github.com/3DAlgoLab/pi-auto-agents)
- [Pi Framework](https://github.com/mariozechner/pi)

---

*Built for the Pi coding agent harness.*
