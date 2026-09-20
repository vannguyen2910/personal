// Draws the sample charts (radar, pie, donut, line) in the legacy style guide as inline SVG.

export function switchTab(btn) {
  const list = btn.closest('.tabs__list')
  list.querySelectorAll('.tabs__tab').forEach((t) => t.classList.remove('tabs__tab--active'))
  btn.classList.add('tabs__tab--active')
}

export function drawCharts() {
    const C = {
      purple: '#6B3FEE', amber: '#F5A623', teal: '#22D3C8',
      coral: '#EF4444', yellow: '#F5D028',
      grid: 'rgba(107,63,238,0.08)', axis: '#C4BECD', label: '#9A94A5',
      bg: 'none'
    };

    /* ── RADAR ──────────────────────────────────────────────── */
    const AXES = ['English','History','Physics','Geography','Chinese','Math'];
    function radarPoint(cx, cy, r, i, total) {
      const a = (Math.PI * 2 * i / total) - Math.PI / 2;
      return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
    }
    function drawRadar(id, datasets) {
      const svg = document.getElementById(id);
      if (!svg) return;
      const W = 280, H = 240, cx = 140, cy = 125, maxR = 85, n = 6;
      let html = '';

      // grid rings
      for (let ring = 1; ring <= 5; ring++) {
        const r = maxR * ring / 5;
        const pts = Array.from({length:n}, (_,i) => radarPoint(cx,cy,r,i,n).join(',')).join(' ');
        html += `<polygon points="${pts}" fill="none" stroke="${C.grid}" stroke-width="1"/>`;
      }
      // axis spokes + labels
      for (let i = 0; i < n; i++) {
        const [x,y] = radarPoint(cx,cy,maxR,i,n);
        html += `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="${C.axis}" stroke-width="1"/>`;
        const [lx,ly] = radarPoint(cx,cy,maxR+18,i,n);
        const anchor = lx < cx-4 ? 'end' : lx > cx+4 ? 'start' : 'middle';
        html += `<text x="${lx}" y="${ly+4}" text-anchor="${anchor}" font-family="var(--font-body)" font-size="10" fill="${C.label}">${AXES[i]}</text>`;
      }
      // series
      datasets.forEach(({data, color, opacity=0.2}) => {
        const pts = data.map((v,i) => radarPoint(cx,cy,maxR*v,i,n).join(',')).join(' ');
        html += `<polygon points="${pts}" fill="${color}" fill-opacity="${opacity}" stroke="${color}" stroke-width="2" stroke-linejoin="round"/>`;
        data.forEach((v,i) => {
          const [px,py] = radarPoint(cx,cy,maxR*v,i,n);
          html += `<circle cx="${px}" cy="${py}" r="3" fill="${color}"/>`;
        });
      });
      svg.innerHTML = html;
    }

    drawRadar('radar-1', [
      { data:[0.8,0.65,0.7,0.55,0.75,0.6], color:C.purple }
    ]);
    drawRadar('radar-2', [
      { data:[0.8,0.65,0.7,0.55,0.75,0.6], color:C.purple },
      { data:[0.55,0.8,0.6,0.75,0.5,0.85], color:C.amber }
    ]);
    drawRadar('radar-3', [
      { data:[0.8,0.65,0.7,0.55,0.75,0.6], color:C.purple },
      { data:[0.55,0.8,0.6,0.75,0.5,0.85], color:C.amber },
      { data:[0.7,0.5,0.85,0.65,0.9,0.45], color:C.coral }
    ]);

    /* ── PIE ────────────────────────────────────────────────── */
    function pieSlice(cx, cy, r, startAngle, endAngle, color, explode=0) {
      const mid = (startAngle + endAngle) / 2;
      const ox = Math.cos(mid) * explode, oy = Math.sin(mid) * explode;
      const x1 = cx + ox + r * Math.cos(startAngle);
      const y1 = cy + oy + r * Math.sin(startAngle);
      const x2 = cx + ox + r * Math.cos(endAngle);
      const y2 = cy + oy + r * Math.sin(endAngle);
      const large = endAngle - startAngle > Math.PI ? 1 : 0;
      return `<path d="M${cx+ox},${cy+oy} L${x1},${y1} A${r},${r} 0 ${large} 1 ${x2},${y2} Z" fill="${color}"/>`;
    }
    function labelPos(cx, cy, r, start, end) {
      const mid = (start + end) / 2;
      return [cx + r * Math.cos(mid), cy + r * Math.sin(mid)];
    }
    function drawPie(id, segments, size=180, showLabels=false) {
      const svg = document.getElementById(id);
      if (!svg) return;
      const cx = size/2, cy = size/2, r = size/2 - 8;
      let angle = -Math.PI/2, html = '';
      segments.forEach(({value, color}) => {
        const sweep = Math.PI * 2 * value;
        html += pieSlice(cx,cy,r,angle,angle+sweep,color);
        if (showLabels) {
          const [lx,ly] = labelPos(cx,cy,r*0.65,angle,angle+sweep);
          const pct = Math.round(value*1000)/10;
          html += `<text x="${lx}" y="${ly+4}" text-anchor="middle" font-family="var(--font-body)" font-size="10" font-weight="600" fill="#fff">${pct} %</text>`;
        }
        angle += sweep;
      });
      svg.innerHTML = html;
    }

    drawPie('pie-1', [
      {value:0.45, color:C.purple},
      {value:0.35, color:C.amber},
      {value:0.20, color:C.teal}
    ], 180, false);
    // add % labels to pie-1
    (() => {
      const s = document.getElementById('pie-1');
      const segs = [{value:0.45,label:'45%',color:'#fff'},{value:0.35,label:'35%',color:'#fff'},{value:0.20,label:'25%',color:'#fff'}];
      const cx=90,cy=90,r=82; let a=-Math.PI/2;
      segs.forEach(({value,label})=>{
        const sweep=Math.PI*2*value;
        const [lx,ly]=labelPos(cx,cy,r*0.65,a,a+sweep);
        s.innerHTML+=`<text x="${lx}" y="${ly+4}" text-anchor="middle" font-family="var(--font-body)" font-size="11" font-weight="600" fill="#fff">${label}</text>`;
        a+=sweep;
      });
    })();

    drawPie('pie-2', [
      {value:0.35, color:C.teal},
      {value:0.40, color:C.purple},
      {value:0.15, color:C.amber},
      {value:0.10, color:C.coral}
    ], 180, false);
    (() => {
      const s=document.getElementById('pie-2');
      const segs=[{value:0.35,l:'35%'},{value:0.40,l:'40%'},{value:0.15,l:'15%'},{value:0.10,l:'10%'}];
      const cx=90,cy=90,r=82; let a=-Math.PI/2;
      segs.forEach(({value,l})=>{
        const sw=Math.PI*2*value;
        const [lx,ly]=labelPos(cx,cy,r*0.65,a,a+sw);
        s.innerHTML+=`<text x="${lx}" y="${ly+4}" text-anchor="middle" font-family="var(--font-body)" font-size="11" font-weight="600" fill="#fff">${l}</text>`;
        a+=sw;
      });
    })();

    drawPie('pie-3', [
      {value:0.284, color:C.coral},
      {value:0.355, color:C.purple},
      {value:0.102, color:C.teal},
      {value:0.147, color:C.amber},
      {value:0.112, color:C.yellow}  /* using yellow for 5th */
    ], 220, true);

    /* ── DONUT MULTI ────────────────────────────────────────── */
    (() => {
      const svg = document.getElementById('donut-multi');
      if (!svg) return;
      const cx=80,cy=80,r=60,sw=14;
      const segs=[
        {value:0.5,color:C.purple},{value:0.25,color:C.amber},
        {value:0.15,color:C.teal},{value:0.10,color:C.coral}
      ];
      const circ=2*Math.PI*r;
      let offset=0, html='';
      html+=`<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#E0DCE9" stroke-width="${sw}"/>`;
      segs.forEach(({value,color})=>{
        const dash=circ*value, gap=circ*(1-value);
        html+=`<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${color}" stroke-width="${sw}" stroke-dasharray="${dash} ${gap}" stroke-dashoffset="${circ*0.25-offset}" stroke-linecap="round" transform="rotate(-90 ${cx} ${cy})"/>`;
        offset+=dash;
      });
      // gap between segments
      svg.innerHTML=html;
    })();

    /* ── LINE ───────────────────────────────────────────────── */
    function drawLine(id, W, H, series, xLabels) {
      const svg = document.getElementById(id);
      if (!svg) return;
      const pad = {t:10,r:10,b:30,l:36};
      const pw = W - pad.l - pad.r;
      const ph = H - pad.t - pad.b;
      const maxVal = Math.max(...series.flatMap(s=>s.data));
      const steps = series[0].data.length - 1;

      let html = '';

      // grid lines
      [0,0.25,0.5,0.75,1].forEach(pct => {
        const y = pad.t + ph*(1-pct);
        const label = Math.round(maxVal*pct/1000)+'k';
        html += `<line x1="${pad.l}" y1="${y}" x2="${W-pad.r}" y2="${y}" stroke="rgba(107,63,238,0.07)" stroke-width="1"/>`;
        html += `<text x="${pad.l-4}" y="${y+4}" text-anchor="end" font-family="var(--font-mono)" font-size="9" fill="${C.label}">${label}</text>`;
      });

      // x labels
      xLabels.forEach((lbl,i) => {
        const x = pad.l + (i/steps)*pw;
        html += `<text x="${x}" y="${H-6}" text-anchor="middle" font-family="var(--font-mono)" font-size="9" fill="${C.label}">${lbl}</text>`;
      });

      // series
      series.forEach(({data, color, dashed=false}) => {
        const pts = data.map((v,i) => {
          const x = pad.l + (i/steps)*pw;
          const y = pad.t + ph*(1 - v/maxVal);
          return `${x},${y}`;
        }).join(' ');
        html += `<polyline points="${pts}" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ${dashed?'stroke-dasharray="4 3"':''} opacity="${dashed?0.5:1}"/>`;
      });

      svg.innerHTML = html;
    }

    const xLabels4 = ['Sep 21','Sep 22','Sep 23','Sep 24'];
    const data1 = [22000,28000,36000,48000,55000,63000,72000,81000];
    const data2 = [18000,24000,32000,42000,50000,58000,67000,78000];
    const x8 = ['','','','','','','',''];

    drawLine('line-1', 440, 200,
      [{data:data1,color:C.purple},{data:data2,color:C.amber,dashed:true}],
      x8.map((_,i)=>i%2===0?['Sep 21','','Sep 22','','Sep 23','','Sep 24',''][i]:'')
    );
    drawLine('line-2', 300, 160,
      [{data:data1,color:C.purple},{data:data2,color:C.amber,dashed:true}],
      x8.map((_,i)=>i%2===0?['Sep 21','','Sep 22','','Sep 23','','Sep 24',''][i]:'')
    );
  }
