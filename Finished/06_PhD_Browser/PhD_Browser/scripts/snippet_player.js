s_div_id = document.currentScript.getAttribute('snippet_span');
s_text = document.currentScript.getAttribute('snippet_text');
s_audio = document.currentScript.getAttribute('snippet_audio');
s_limits = eval(document.currentScript.getAttribute('snippet_limits'));
s_name = document.currentScript.getAttribute('snippet_name');

add_new_snippet(s_div_id, s_text, s_audio, s_limits, s_name);