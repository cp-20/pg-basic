import{_ as s,o as n,c as a,V as l}from"./chunks/framework.c2f65d89.js";const F=JSON.parse('{"title":"5.6. 参照渡し","description":"","frontmatter":{},"headers":[],"relativePath":"text/chapter-5/call-by-ref.md","filePath":"text/chapter-5/call-by-ref.md"}'),p={name:"text/chapter-5/call-by-ref.md"},e=l(`<h1 id="_5-6-参照渡し" tabindex="-1">5.6. 参照渡し <a class="header-anchor" href="#_5-6-参照渡し" aria-label="Permalink to &quot;5.6. 参照渡し&quot;">​</a></h1><h2 id="_5-6-1-アドレス" tabindex="-1">5.6.1. アドレス <a class="header-anchor" href="#_5-6-1-アドレス" aria-label="Permalink to &quot;5.6.1. アドレス&quot;">​</a></h2><p>一度関数から離れて「変数」について考えてみる。 以前触れた通り、変数は 0 と 1 の組み合わせによって表されているが、プログラムが変数の値を参照するときには、「変数の住所」の情報を持っていなければならない（でなければ、どの変数がどれか分からなくなってしまう）。 この変数の住所のことを <strong>アドレス</strong> と呼ぶ。変数には「値」と「アドレス」の二種類の情報が備わっている。具体的には、メモリの前から何バイト目に変数が格納されているかの情報が与えられる。</p><p>アドレスは変数の前に <code>&amp;</code> をつけることで取得することができる。</p><div class="language-cpp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">iostream</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">namespace</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> endl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">x </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> endl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">[output]</span></span>
<span class="line"><span style="color:#A6ACCD;">4</span></span>
<span class="line"><span style="color:#A6ACCD;">0x7fffe13bd944</span></span></code></pre></div><p>アドレスは人によって・実行するたびに変わることに注意。（変わらないこともある） 出力に <code>0x</code> がついているが、これは 16 進数であることを表している。 10~15 に当たる1桁の値として、<code>abcdef</code> が用いられる（探してみると 0-9 と a~f しかない文字列を時々見つけられる。これらは16進数である事が多い）。</p><ul><li>「<code>int</code> 型のアドレス」の型は <code>int *</code> である。</li><li>アドレスから元の変数に戻すには、アドレスの前に <code>*</code> をつける。</li></ul><div class="language-cpp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">iostream</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">namespace</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">p </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> p </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> endl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">p </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> endl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">[output]</span></span>
<span class="line"><span style="color:#A6ACCD;">0x7ffc62a31e34</span></span>
<span class="line"><span style="color:#A6ACCD;">5</span></span></code></pre></div><p>ここで <code>*p += 1</code> と書いているが、<code>p</code> に <code>x</code> のアドレスが入っているので、<code>x += 1</code> と書くのと同じことが起きる。</p><h2 id="_5-6-2-値渡しと参照渡し" tabindex="-1">5.6.2. 値渡しと参照渡し <a class="header-anchor" href="#_5-6-2-値渡しと参照渡し" aria-label="Permalink to &quot;5.6.2. 値渡しと参照渡し&quot;">​</a></h2><div class="language-cpp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">iostream</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">namespace</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">triple</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">x</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> x</span><span style="color:#89DDFF;">*</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">triple</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> endl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>「引数」の節で、関数を呼び出した側の変数は、関数内で操作しても変わらないという事を説明した。</p><p>これについてもう少し詳しく触れると、関数を呼び出すとき、与えられた引数は複製され（ = 新しい変数が作られて）、関数内で使用される。</p><p>つまり変数の値のみを渡している。この事を <strong>値渡し</strong> と呼ぶ。</p><p><code>main</code> 関数で作った <code>x</code> を <code>triple</code> の中で変更できるようにするには、<code>x</code> のアドレス を関数に渡せば良い。</p><div class="language-cpp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">iostream</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">namespace</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">triple</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">*</span><span style="color:#A6ACCD;font-style:italic;">x</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(*</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">)*</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">triple</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> endl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">[output]</span></span>
<span class="line"><span style="color:#A6ACCD;">12</span></span></code></pre></div><p>これを <strong>アドレス渡し</strong> と呼ぶ。関数にわたすのは変数の値ではなく「変数のアドレス」なので、呼び出し側は <code>triple(&amp;x)</code> と記述する。</p><p>しかし、<code>&amp;x</code> や <code>*x</code> をいちいち書くのは面倒なので、これを簡略化した記法が存在する。下のコードを書けば、上のコードと書いたのと同じことになる。</p><div class="language-cpp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">iostream</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">namespace</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">triple</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">&amp;</span><span style="color:#A6ACCD;font-style:italic;">x</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> x</span><span style="color:#89DDFF;">*</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">triple</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> endl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">[output]</span></span>
<span class="line"><span style="color:#A6ACCD;">12</span></span></code></pre></div><p>型の部分を <code>int</code> から <code>int &amp;</code> に変えるだけで、変数のポインタを渡したことになり、<code>main</code> 関数の <code>x</code> を <code>triple</code> 関数から変更できるようになるのである。</p><p>この機能を <strong>参照</strong> と言い、この書き方を <strong>参照渡し</strong> と呼ぶ。</p>`,25),o=[e];function c(t,r,D,i,y,C){return n(),a("div",null,o)}const b=s(p,[["render",c]]);export{F as __pageData,b as default};
