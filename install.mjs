#!/usr/bin/env node
/**
 * Post-install script for pi-auto-agents
 * Installs dependencies and copies orchestrator agent
 */

import { execSync } from 'child_process';

console.log('🚀 Setting up pi-auto-agents...');

try {
  // Ensure pi-subagents is installed (provides subagent tool for orchestrator)
  console.log('📦 Installing pi-subagents...');
  try {
    execSync('pi install npm:pi-subagents', { stdio: 'inherit' });
  } catch (subErr) {
    console.warn('⚠️  Could not install pi-subagents (may already be managed differently):', subErr.message);
  } 

  console.log('✅ Setup complete!');
  console.log('');
  console.log('📖 Usage:');
  console.log('   pi install npm:pi-auto-agents');
  console.log('   # or: cd pi-auto-agents && pi install .');
  console.log('   # Then complex coding tasks will auto-route to sub-agents via the skill');
  console.log('');
  console.log('🔄 Run: /reload  (in Pi)');
} catch (error) {
  console.error('❌ Setup failed:', error.message);
  process.exit(1);
}
