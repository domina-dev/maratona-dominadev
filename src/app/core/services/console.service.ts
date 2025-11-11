import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface LogEntry {
  timestamp: Date;
  tipo: 'log' | 'info' | 'warn' | 'error' | 'success';
  mensagem: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConsoleService {
  
  private logsSubject = new BehaviorSubject<LogEntry[]>([]);
  public logs$: Observable<LogEntry[]> = this.logsSubject.asObservable();
  
  private maxLogs: number = 100; // Limite de logs armazenados

  constructor() {
    // Interceptar console.log, console.error, etc. (opcional)
    this.interceptarConsole();
  }

  /**
   * Adiciona um log normal
   */
  log(mensagem: string): void {
    this.adicionarLog('log', mensagem);
    console.log(mensagem); // Mantém no console do navegador também
  }

  /**
   * Adiciona um log de informação
   */
  info(mensagem: string): void {
    this.adicionarLog('info', mensagem);
    console.info(mensagem);
  }

  /**
   * Adiciona um log de aviso
   */
  warn(mensagem: string): void {
    this.adicionarLog('warn', mensagem);
    console.warn(mensagem);
  }

  /**
   * Adiciona um log de erro
   */
  error(mensagem: any): void {
    this.adicionarLog('error', mensagem);
    console.error(mensagem);
  }

  /**
   * Adiciona um log de sucesso
   */
  success(mensagem: string): void {
    this.adicionarLog('success', mensagem);
    console.log('✓', mensagem);
  }

  /**
   * Limpa todos os logs
   */
  limpar(): void {
    this.logsSubject.next([]);
  }

  /**
   * Obtém todos os logs atuais
   */
  obterLogs(): LogEntry[] {
    return this.logsSubject.value;
  }

  /**
   * Adiciona um log à lista
   */
  private adicionarLog(tipo: LogEntry['tipo'], mensagem: string): void {
    const logs = this.logsSubject.value;
    
    const novoLog: LogEntry = {
      timestamp: new Date(),
      tipo,
      mensagem
    };

    // Adiciona o novo log
    logs.push(novoLog);

    // Remove logs antigos se exceder o limite
    if (logs.length > this.maxLogs) {
      logs.shift();
    }

    this.logsSubject.next([...logs]);
  }

  /**
   * Intercepta os métodos nativos do console (opcional)
   * Use com cuidado em produção!
   */
  private interceptarConsole(): void {
    // Salvar referências originais
    const originalLog = console.log;
    const originalInfo = console.info;
    const originalWarn = console.warn;
    const originalError = console.error;

    // Sobrescrever console.log
    console.log = (...args: any[]) => {
      const mensagem = args.map(arg => this.formatarArgumento(arg)).join(' ');
      this.adicionarLog('log', mensagem);
      originalLog.apply(console, args);
    };

    // Sobrescrever console.info
    console.info = (...args: any[]) => {
      const mensagem = args.map(arg => this.formatarArgumento(arg)).join(' ');
      this.adicionarLog('info', mensagem);
      originalInfo.apply(console, args);
    };

    // Sobrescrever console.warn
    console.warn = (...args: any[]) => {
      const mensagem = args.map(arg => this.formatarArgumento(arg)).join(' ');
      this.adicionarLog('warn', mensagem);
      originalWarn.apply(console, args);
    };

    // Sobrescrever console.error
    console.error = (...args: any[]) => {
      const mensagem = args.map(arg => this.formatarArgumento(arg)).join(' ');
      this.adicionarLog('error', mensagem);
      originalError.apply(console, args);
    };
  }

  /**
   * Formata argumentos para string
   */
  private formatarArgumento(arg: any): string {
    if (typeof arg === 'object') {
      try {
        return JSON.stringify(arg, null, 2);
      } catch (e) {
        return String(arg);
      }
    }
    return String(arg);
  }
}