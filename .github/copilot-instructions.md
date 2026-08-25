## System Context - Nisar AI OS

This repository implements **Nisar AI OS**, a Kotlin-based AI orchestration framework built on top of LiteRT-LM-style tool calling.

The system is NOT a simple app — it is a modular AI execution kernel.

---

## Core Principles

Copilot must always follow these architectural rules:

### 1. Tool-First Architecture
- Every capability must be implemented as a **Tool**
- No hardcoded logic inside orchestration layer
- Business logic lives inside tools only

### 2. Separation of Concerns
- `NisarAIOS.kt` → orchestration only
- `IntentRouter` → intent detection only
- `Tool` implementations → execution only
- `Utils` → pure helper functions only

### 3. Deterministic Execution
- No hidden side effects
- No global mutable state except ToolRegistry
- All outputs must be traceable from input → tool → result

### 4. Plugin Extensibility
- New tools must implement `BaseTool`
- Tools must be stateless where possible
- Tools must declare capability via `canHandle(intent)`

---

## Coding Standards

### Kotlin Rules
- Use Kotlin 1.9+ idioms
- Prefer data classes for models
- Avoid nullable types unless strictly required
- Use sealed classes for intent expansion when needed

### Error Handling
- NEVER ignore exceptions
- Wrap tool execution failures in `Result.error`
- No silent failures allowed

### Naming Conventions
- Tools: `XxxTool` (e.g. `MathTool`)
- Core systems: descriptive nouns (`IntentRouter`, `ToolRegistry`)
- Functions: verb-based (`execute`, `parse`, `resolve`)

---

## Architecture Awareness

Copilot must assume this system architecture:

### Request Flow
```
User Input
    ↓
IntentRouter (classify + extract parameters)
    ↓
ToolRegistry (find best matching Tool)
    ↓
Tool.execute() (run business logic)
    ↓
Result (success or error)
    ↓
User Output
```

### Tool Anatomy
Every Tool must provide:
- `name: String` — unique identifier
- `description: String` — what it does (for routing)
- `canHandle(intent): Boolean` — capability predicate
- `execute(input): Result<Output>` — main logic

---

## 📖 Learning Resources

### Nisar AI Agent Book
A comprehensive guide to AI agent architecture, covering everything from fundamentals to production deployment.

**Location:** `nisar-ai-agent-book.zip` (repository root)  
**Quick Start:**
```bash
unzip nisar-ai-agent-book.zip
cd nisar-ai-agent-book
python -m http.server 8080
# Open http://localhost:8080
```

#### 9 Core Chapters

| # | Chapter | Focus |
|---|---------|-------|
| 1 | **Agent Architecture** | System design, core concepts, component interactions |
| 2 | **Memory & Tools** | Context management, tool registration, capability patterns |
| 3 | **Planning & Reasoning** | Intent routing, decision-making, multi-step planning |
| 4 | **Runtime Execution** | Lifecycle management, execution loops, state handling |
| 5 | **Security & Validation** | Safe execution, input validation, security boundaries |
| 6 | **Production Architecture** | Scalability, deployment patterns, reliability engineering |
| 7 | **Observability** | Monitoring, logging, debugging, performance tracking |
| 8 | **Advanced Patterns** | Multi-agent systems, orchestration, complex workflows |
| 9 | **Real-World Applications** | Case studies, practical implementations, lessons learned |

#### Key Features
- ✅ **Zero dependencies** — Pure HTML/CSS/JavaScript
- ✅ **Interactive Agent Loop Simulator** — See execution in real-time
- ✅ **Full-text search** — Find concepts across all chapters
- ✅ **Progress tracking** — localStorage-based reading history
- ✅ **Mobile responsive** — Learn on any device
- ✅ **Production-ready** — Enterprise documentation quality

#### When to Reference Each Chapter

**Before Building Tools:**
- Read **Chapter 2: Memory & Tools** first
  - Tool interface patterns
  - Capability registration
  - State management approaches

**Before Opening Network/File I/O:**
- Study **Chapter 5: Security & Validation**
  - Input validation strategies
  - Boundary enforcement
  - Error handling in tools

**Before Production Deployment:**
- Review **Chapter 6: Production Architecture**
  - Scalability patterns
  - Failure recovery
  - Observability setup
  
**For Complex Workflows:**
- Explore **Chapter 8: Advanced Patterns**
  - Tool orchestration
  - Dependency management
  - Async/parallel execution

---

## Repository Structure

```
src/
  ├── core/
  │   ├── NisarAIOS.kt          Orchestration kernel
  │   ├── IntentRouter.kt        Intent classification
  │   └── ToolRegistry.kt        Tool discovery
  ├── tools/
  │   ├── BaseTool.kt            Tool interface
  │   ├── MathTool.kt            Example: arithmetic
  │   └── [YourTool].kt          Add new capabilities here
  ├── models/
  │   └── Intent.kt              Intent data structures
  └── utils/
      └── Extensions.kt          Helper functions

tests/
  └── ToolTests.kt              Tool verification

docs/
  ├── AGENT_BOOK_INTEGRATION.md Integration guide
  └── API.md                     Tool API reference
```

---

## Example: Building a New Tool

```kotlin
class CalculatorTool : BaseTool {
    override val name = "calculator"
    override val description = "Performs arithmetic: add, subtract, multiply, divide"
    
    override fun canHandle(intent: Intent): Boolean {
        return intent.action in setOf("add", "subtract", "multiply", "divide")
    }
    
    override fun execute(input: Map<String, Any>): Result<Map<String, Any>> {
        return try {
            val a = input["first"] as? Double ?: throw IllegalArgumentException("Missing 'first'")
            val b = input["second"] as? Double ?: throw IllegalArgumentException("Missing 'second'")
            val action = input["action"] as? String ?: throw IllegalArgumentException("Missing 'action'")
            
            val result = when (action) {
                "add" -> a + b
                "subtract" -> a - b
                "multiply" -> a * b
                "divide" -> if (b == 0.0) throw IllegalArgumentException("Division by zero") else a / b
                else -> throw IllegalArgumentException("Unknown action: $action")
            }
            
            Result.success(mapOf("result" to result, "action" to action))
        } catch (e: Exception) {
            Result.error("Calculator failed: ${e.message}")
        }
    }
}
```

---

## Debugging Checklist

| Issue | Check | Fix |
|-------|-------|-----|
| Tool not found | `ToolRegistry.register()` called? | Register in initialization |
| Intent not routing | `IntentRouter.canHandle()` returns true? | Update routing logic |
| Result is error | Exception in `execute()`? | Add try-catch, wrap in Result.error |
| Stuck loops | Tools have side effects? | Make stateless, review globals |

---

## Resources

- **Nisar AI Agent Book:** `nisar-ai-agent-book-README.md`
- **Integration Guide:** `docs/AGENT_BOOK_INTEGRATION.md`
- **Main Repository:** https://github.com/rananisarsb51214/Nisaraistudio-
- **Production Site:** https://nisaraistudio.vercel.app

---

**Last Updated:** 2026-08-25  
**Version:** 1.0.0  
**Maintained by:** Nisar AI Studio
