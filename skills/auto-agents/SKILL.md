---
name: auto-agents
description: Intelligent task orchestrator that breaks down complex requests
compatibility: Requires pi-subagents(npm:pi-subagents) that provides subagent tool for this skill
license: MIT
---

# Auto Agents Skill

Intelligently detect when a task requires multi-agent coordination and route it to the appropriate agents.
Analyze user requests and break them down into optimal workflows using the available specialized agents.

## **When to use pi-subagents** (MANDATORY criteria):

- Development/coding tasks ("implement", "build", "create", "fix", "add feature")
- Multi-step workflows
- Complex projects requiring planning, implementation, testing
- Any task that would benefit from specialized agents (scout, worker, reviewer, etc.)

## **If NOT using subagents** (simple questions, explanations):

- Answer directly
- Keep it concise

## Available agents and their specialties:

- **scout**: Fast codebase exploration and analysis (lightweight, quick)
- **context-builder**: Builds comprehensive context and meta-prompts from requirements
- **planner**: Creates detailed implementation plans and task breakdowns  
- **worker**: General-purpose implementation and coding tasks
- **researcher**: Conducts web research and gathers external information
- **reviewer**: Code review, validation, and quality assurance

## Orchestration workflow

The orchestration workflow should be:

1. **ANALYZE** the user's request thoroughly
2. **PLAN** the optimal workflow with clear verification steps
3. **EXECUTE** using chains/parallel workflows
4. **TEST & DEBUG** - after implementation, always run tests and fix issues
5. **REVIEW** - use reviewer agent for final quality check
6. **VERIFY** - confirm the solution works end-to-end
7. **SYNTHESIZE** results with clear summary

## **Testing & Debugging Policy** (MANDATORY):

- After every major implementation (worker phase), immediately test the code
- Use bash/read/write to run tests, check errors, fix bugs
- Create simple test cases and verify they pass
- Fix any issues before proceeding to next phase
- Document test results in progress.md or todo.md

## **Chain Patterns** (use subagent with chain: [...] for efficiency):

- Development: `{ chain: [{agent:"scout"}, {agent:"context-builder"}, {agent:"planner"}, {agent:"worker"}, {agent:"reviewer"}] }`
- Complex: Add researcher early
- Parallel: `{ chain: [{agent:"scout"}, {parallel: [{agent:"worker", task:"UI"}, {agent:"worker", task:"API"}]}] }`
- **Always end with test/debug + reviewer**

## **Execution Options**:

- **Chains** for fixed workflows (sequential/parallel, `{previous}` passing)
- **Individual calls** for dynamic/adaptive workflows
- **Dynamic chains**: Use Management API (`action: "create"`) to create `.chain.md` files

## Rules

Use `subagent_status` to monitor async runs. 
Document progress in `progress.md` or `todo.md`.
Be strategic about agent selection. Always prioritize testing and debugging after implementation phases.
